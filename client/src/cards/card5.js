import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Card5 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Sample data
    const data = [
      { year: 10, value: Math.floor(Math.random() * 20) + 8 },
      { year: 11, value: Math.floor(Math.random() * 20) + 8 },
      { year: 12, value: Math.floor(Math.random() * 20) + 8 },
      { year: 13, value: Math.floor(Math.random() * 20) + 8 },
      { year: 14, value: Math.floor(Math.random() * 20) + 8 },
      { year: 15, value: Math.floor(Math.random() * 20) + 8 },
      { year: 16, value: Math.floor(Math.random() * 20) + 8 },
      { year: 17, value: Math.floor(Math.random() * 20) + 8 },
      { year: 18, value: Math.floor(Math.random() * 20) + 8 },
      { year: 19, value: Math.floor(Math.random() * 20) + 8 },
      { year: 20, value: Math.floor(Math.random() * 20) + 8 },
      { year: 21, value: Math.floor(Math.random() * 20) + 8 },
      { year: 22, value: Math.floor(Math.random() * 20) + 8 },
      { year: 23, value: Math.floor(Math.random() * 20) + 8 },
      { year: 24, value: Math.floor(Math.random() * 20) + 8 },
      { year: 25, value: Math.floor(Math.random() * 20) + 8 },
      { year: 26, value: Math.floor(Math.random() * 20) + 8 },
      { year: 27, value: Math.floor(Math.random() * 20) + 8 },
    ];

    // Function to render the chart
    const renderChart = () => {
      // Clear existing chart
      d3.select(chartRef.current).selectAll('*').remove();

      // Calculate dimensions based on container size
      const containerWidth = chartRef.current.clientWidth;
      const containerHeight = chartRef.current.clientHeight;
      const margin = { top: 20, right: 30, bottom: 55, left: 40 };
      const width = containerWidth - margin.left - margin.right;
      const height = containerHeight - margin.top - margin.bottom;

      // Create scales
      const xScale = d3
        .scaleLinear()
        .domain([10, 27])
        .range([0, width]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value)])
        .range([height, 0]);

      // Create SVG element
      const svg = d3
        .select(chartRef.current)
        .append('svg')
        .attr('width', containerWidth)
        .attr('height', containerHeight)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      // Create the line generator
      const line = d3
        .line()
        .x((d) => xScale(d.year))
        .y((d) => yScale(d.value));

      // Append the line
      svg
        .append('path')
        .datum(data)
        .attr('class', 'line')
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', 'white')
        .attr('stroke-width', 2);

      // // Append x-axis
      svg
        .append('g')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale).tickSize(0).tickFormat(''));

        // Hide the y-axis line and ticks
        svg.append('g').call(d3.axisLeft(yScale).tickSize(0).tickFormat(''));
    };
  
    renderChart();
    window.addEventListener('resize', renderChart);

    return () => {
      window.removeEventListener('resize', renderChart);
    };
  }, []);

  return (
    <>
      <h1 className='font-bold ml-[6%] mt-[10px] text-black'>TRENDS</h1>
      <div className='h-[100%] overflow-hidden' ref={chartRef}></div>
     </>
  );
};

export default Card5;
