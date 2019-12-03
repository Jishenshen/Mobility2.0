var d3 = Plotly.d3;
var dataUrl = 'https://raw.githubusercontent.com/Jishenshen/Employment/master/data/difyears_graclean.csv'

d3.csv(dataUrl, (err, rows) => {
	var fig = makeFigure(rows)
	var frames = fig.frames
	
	Plotly.newPlot('myDiv', fig).then(gd => {
		gd.on('plotly_click', evt => onClick(gd, frames, evt))
	})
})

function makeFigure (rows) {
	var lookup = {}
	var colormap = d3.scale.category10()
	
	var makeTrace = (name) => ({
		name: name,
		mode: 'markers',
		x: [],
		y: [],
		ids: [],
		text: [],
		marker: {
		   sizemode: 'area',
     	   sizeref: 50,
			size: [],
			color: []
		}
	})
	
	rows.forEach(r => {
		var year = r.year
		
		if (!lookup[year]) {
			lookup[year] = makeTrace(year)
		}
		
		var trace = lookup[year]
		
		trace.x.push(r.lifeExp)
		trace.y.push(r.gdpPercap)
		trace.ids.push(r.region)
		trace.text.push(r.region)
		trace.marker.size.push(r.pop)
		trace.marker.color.push(colormap(r.continent))
	})
	
	var years = Object.keys(lookup)
	
	return {
		data: [
			{
				name: 'trail',
				mode: 'markers+lines',
				marker: {
					sizemode: 'area',
					sizeref: 200000,
				},
				line: {
					simplify: false,
					width: 1						
				},
				hoverinfo: 'skip'
			}, 
			lookup[years[0]]
		],
		layout: {
			updatemenus: [makePlayPauseMenu()],
			sliders: [{
				pad: {l: 130, t: 55},
				currentvalue: {
				  visible: true,
				  prefix: 'Year:',
				  xanchor: 'right',
				  font: {size: 20, color: '#666'}
				},
				steps: years.map(y => ({
					method: 'animate',
					label: y,
					args: [[y], {
					  mode: 'immediate',
					  transition: {duration: 300},
					  frame: {duration: 300, redraw: false},
					}]
				})) 
			}],
			annotations: [{
				text: '<i>Click on bubble to select region</i>',
			  	showarrow: false,
        		x: 0,
        		y: 1,
        		xref: 'paper',
        		yref: 'paper',
        		xanchor: 'left',
        		yanchor: 'bottom',
        		font: {size: 18}
			}],
			xaxis: {
				title: ' Year',
				range: [6,17]
			},
			yaxis: {
				title: 'Employment',
				type: 'log'
			},
			showlegend: false,
			hovermode: 'closest'
		},
		frames: years.map(y => ({
			name: y,
			data: [{}, lookup[y]],
			layout: {}
		}))
	}
}

function onClick (gd, frames, evt) {
	var pt = evt.points[0]
	var id = pt.id
	var index = pt.data.ids.indexOf(id)
	var year = pt.data.name
	var color = pt['marker.color']
	
	var opacity = pt.data.x
		.map((_, i) => i === index ? 1 : 0.3)
	
	var x = []
	var y = []
	var markerSize = []
	
	frames.forEach(f => {
		x.push(f.data[1].x[index])
		y.push(f.data[1].y[index])
		markerSize.push(f.data[1].marker.size[index])
	})
	
	frames.forEach((f, i) => {
		f.data[0]['line.color'] = color
		f.data[0]['marker.color'] = color
		f.data[0].x = x.slice(0, i + 1)
		f.data[0].y = y.slice(0, i + 1)
		f.data[0]['marker.size'] = markerSize.slice(0, i + 1)
		
		f.data[1]['marker.opacity'] = opacity
		
		f.layout['annotations[0].text'] = `Selected: ${id}`
	})
	
	Plotly.addFrames(gd, frames)
	
	Plotly.animate(gd, [year], {
		mode: 'immediate',
		frame: {duration: 0},
		transition: {duration: 0}
	})
}

function makePlayPauseMenu () {
	return {
      x: 0,
      y: 0,
      yanchor: 'top',
      xanchor: 'left',
      showactive: false,
      direction: 'left',
      type: 'buttons',
      pad: {t: 87, r: 10},
      buttons: [{
        method: 'animate',
        args: [null, {
          mode: 'immediate',
          fromcurrent: true,
          transition: {duration: 300},
          frame: {duration: 500, redraw: false}
        }],
        label: 'Play'
      }, {
        method: 'animate',
        args: [[null], {
          mode: 'immediate',
          transition: {duration: 0},
          frame: {duration: 0, redraw: false}
        }],
        label: 'Pause'
      }]
	}
}