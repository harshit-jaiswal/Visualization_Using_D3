console.log('External js file is connected now');
var margin = { left:100, rigth:10, top:10, bottom:100 };

var width = 600 - margin.left - margin.rigth;
var height = 400 - margin.top - margin.bottom;

var data = [ 25, 20, 10, 12, 15];
// console.log(data);

var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width","400")
    .attr("height","400");

var circles = svg.selectAll("circle")    
                .data(data);


circles.enter()
        .append("circle")
            .attr("cx",function(d,i){
                console.log(i);
                return 50*i + 25;
            })
            .attr("cy",200)
            .attr("r",function(d){
                return d;
            })
            .attr("fill","red");
    // svg.append("rect")
    //         .attr("x",25)
    //         .attr("y",0)
    //         .attr("width",150)
    //         .attr("height",150)
    //         .attr("fill","green");
    
    
d3.json("../data/buildings.json").then(function(data) { //new syntex after v 5.x (promises)
    console.log(data);
    data.forEach(d => {
        d.height = + d.height;
    })
}).catch(function(error){
    console.log(error);
}) 