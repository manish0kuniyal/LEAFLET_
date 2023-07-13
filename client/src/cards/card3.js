import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import '../index.css';

const Card3 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Sample data
    const data = [
      { year: 10, value:Math.floor(Math.random() * 20) + 8},
      { year: 11, value: Math.floor(Math.random() * 20) + 8 },
      { year: 12, value: Math.floor(Math.random() * 20) + 8},
      { year: 13, value: Math.floor(Math.random() * 20) + 8 },
      { year: 14, value: Math.floor(Math.random() * 20) + 8},
      { year: 15, value: Math.floor(Math.random() * 20) + 8},
      { year: 16, value: Math.floor(Math.random() * 20) + 8},
      { year: 17, value: Math.floor(Math.random() * 20) + 8},
      { year: 18, value: Math.floor(Math.random() * 20) + 8},
      { year: 19, value:  Math.floor(Math.random() * 20) + 8},
      { year: 20, value: Math.floor(Math.random() * 20) + 8},
      { year: 21, value: Math.floor(Math.random() * 20) + 8},
      { year: 22, value: Math.floor(Math.random() * 20) + 8 },
      { year: 23, value: Math.floor(Math.random() * 20) + 8 },
      { year: 24, value: Math.floor(Math.random() * 20) + 8},
      { year: 25, value: Math.floor(Math.random() * 20) + 8 },
      { year: 26, value: Math.floor(Math.random() * 20) + 8},
      { year: 27, value: Math.floor(Math.random() * 20) + 8 },
    ];

    // Function to render the chart
    const renderChart = () => {
      // Clear existing chart
      d3.select(chartRef.current).selectAll('*').remove();

      // Calculate dimensions based on container size
      const containerWidth = chartRef.current.clientWidth;
      const containerHeight = chartRef.current.clientHeight;
      const margin = { top: 20, right: 30, bottom: 85, left: 40 };
      const width = containerWidth - margin.left - margin.right;
      const height = containerHeight - margin.top - margin.bottom;

      // Create scales
      const xScale = d3
        .scaleBand()
        .domain(data.map(d => d.year))
        .range([0, width])
        .padding(0.3);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => d.value)])
        .range([height, 0]); 

      // Create SVG element
      
      // Create SVG element
      const svg = d3
        .select(chartRef.current)
        .append('svg')
        .attr('width', containerWidth)
        .attr('height', containerHeight)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      // Append the bars
      svg
        .selectAll('rect')
        .data(data)
        .enter()
        .append('rect')
        .attr('x', d => xScale(d.year))
        .attr('y', height)
        .attr('width', xScale.bandwidth())
        .attr('height', 0)
        .attr('fill', '#03a678')
        .transition()
        .duration(1000) // Animation duration in milliseconds
        .attr('y', d => yScale(d.value))
        .attr('height', d => height - yScale(d.value));

      // Append x-axis
      svg
        .append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        .selectAll('text')
        .attr('fill', 'white')
        .style('text-anchor', 'end')
        .attr('dx', '-0.8em')
        .attr('dy', '0.25em')
        // .attr('transform', 'rotate(-65)');

      // Append y-axis
      svg
        .append('g')
        .call(d3.axisLeft(yScale))
        .selectAll('text')
        .attr('fill', 'white');
    };


    // Render the chart initially and on window resize
    renderChart();
    window.addEventListener('resize', renderChart);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', renderChart);
    };
  }, []);

  return (<>
  <h1
   className='font-bold ml-[6%] mt-[10px] text-white '
  >DEMOGRAPHICS</h1>
    <div className='h-[100%]  overflow-hidden' ref={chartRef}></div>
    </>);
};

export default Card3;
