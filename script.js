document.addEventListener('DOMContentLoaded', function() {
    const svg = d3.select("#world-map");
    const tooltip = document.getElementById('tooltip');
    const tooltipCountry = document.getElementById('tooltip-country');
    const tooltipTariff = document.getElementById('tooltip-tariff');
    const tooltipCompanies = document.getElementById('tooltip-companies');
    const zoomResetButton = document.getElementById('zoom-reset');
    
    // 改用d3.js加载真实的世界地图
    const width = 1000;
    const height = 500;
    
    // 创建地图投影
    const projection = d3.geoNaturalEarth1()
        .scale(170)
        .translate([width / 2, height / 2]);
        
    const path = d3.geoPath()
        .projection(projection);
    
    // 定义缩放行为
    const zoom = d3.zoom()
        .scaleExtent([1, 8])  // 缩放范围
        .on("zoom", zoomed);
    
    // 加载世界地图数据
    d3.json("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
        .then(function(world) {
            const countries = topojson.feature(world, world.objects.countries).features;
            
            // 创建一个群组元素来应用变换
            const g = svg.append("g");
            
            // 绘制国家
            g.selectAll("path")
                .data(countries)
                .enter()
                .append("path")
                .attr("d", path)
                .attr("id", d => `country-${d.id}`)
                .attr("class", "country")
                .attr("data-name", d => d.properties.name)
                .on("mouseover", showTooltip)
                .on("mousemove", moveTooltip)
                .on("mouseout", hideTooltip)
                .on("click", focusCountry);
            
            // 为国家添加颜色
            applyTariffColors();
            
            // 创建缩放控制
            svg.call(zoom);
            
            // 初始化图标
            initializeIcons();
        })
        .catch(error => console.error('加载世界地图时出错:', error));
    
    function applyTariffColors() {
        // 遍历tariffData中的每个国家，并应用相应的颜色
        Object.keys(tariffData).forEach(countryCode => {
            // 查找对应的国家元素
            const countryInfo = tariffData[countryCode];
            const tariffRate = countryInfo.tariffRate;
            
            // 为每个国家元素添加适当的类
            d3.selectAll(".country").each(function(d) {
                const countryId = d3.select(this).attr("id");
                const countryName = d3.select(this).attr("data-name");
                
                // 使用英文名称匹配地图数据
                if (countryName && countryInfo.englishName && countryName.toLowerCase() === countryInfo.englishName.toLowerCase() || 
                    countryId === `country-${countryCode}`) {
                    let tariffClass = "";
                    
                    if (tariffRate === 10) {
                        tariffClass = "tariff-10";
                    } else if (tariffRate >= 20 && tariffRate < 30) {
                        tariffClass = "tariff-20-29";
                    } else if (tariffRate >= 30 && tariffRate < 40) {
                        tariffClass = "tariff-30-39";
                    } else if (tariffRate >= 40 && tariffRate < 50) {
                        tariffClass = "tariff-40-49";
                    } else if (tariffRate >= 50) {
                        tariffClass = "tariff-50-plus";
                    }
                    
                    d3.select(this).classed(tariffClass, true);
                }
            });
        });
    }
    
    function showTooltip(event, d) {
        // 查找国家数据
        let countryInfo = null;
        const countryName = d.properties.name;
        
        // 尝试通过英文名称查找国家数据
        Object.keys(tariffData).forEach(code => {
            if (tariffData[code].englishName && tariffData[code].englishName.toLowerCase() === countryName.toLowerCase()) {
                countryInfo = tariffData[code];
            }
        });
        
        if (countryInfo) {
            tooltipCountry.textContent = countryInfo.name;
            tooltipTariff.textContent = `${countryInfo.tariffRate}%`;
            
            // 显示受影响的公司
            if (countryInfo.affectedCompanies && countryInfo.affectedCompanies.length > 0) {
                let companiesHTML = '<div class="font-semibold mb-1">主要受影响公司:</div><ul class="list-disc list-inside">';
                countryInfo.affectedCompanies.forEach(company => {
                    companiesHTML += `<li>${company.name} (${company.ticker}) - ${company.reason}</li>`;
                });
                companiesHTML += '</ul>';
                
                // 添加生效日期信息
                companiesHTML += `<div class="mt-2 text-xs text-gray-500">生效日期: ${countryInfo.effectiveDate}</div>`;
                
                tooltipCompanies.innerHTML = companiesHTML;
            } else {
                tooltipCompanies.innerHTML = `<div class="mt-2 text-xs text-gray-500">生效日期: ${countryInfo.effectiveDate}</div>`;
            }
            
            tooltip.style.display = 'block';
            moveTooltip(event);
        }
    }
    
    function moveTooltip(event) {
        // 获取视窗大小
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // 获取tooltip大小
        const tooltipWidth = tooltip.offsetWidth;
        const tooltipHeight = tooltip.offsetHeight;
        
        // 计算位置，确保tooltip完全在视窗内
        let x = event.clientX + 15; // 鼠标右侧15像素
        let y = event.clientY + 15; // 鼠标下方15像素
        
        // 确保tooltip不会超出右侧边界
        if (x + tooltipWidth > viewportWidth) {
            x = event.clientX - tooltipWidth - 15; // 放在鼠标左侧
        }
        
        // 确保tooltip不会超出底部边界
        if (y + tooltipHeight > viewportHeight) {
            y = event.clientY - tooltipHeight - 15; // 放在鼠标上方
        }
        
        // 确保tooltip不会超出左侧和顶部边界
        x = Math.max(5, x);
        y = Math.max(5, y);
        
        // 设置tooltip位置
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    }
    
    function hideTooltip() {
        tooltip.style.display = 'none';
    }
    
    function focusCountry(event, d) {
        event.stopPropagation(); // 防止事件冒泡
        
        // 获取所选国家的边界
        const bounds = path.bounds(d);
        const dx = bounds[1][0] - bounds[0][0];
        const dy = bounds[1][1] - bounds[0][1];
        const x = (bounds[0][0] + bounds[1][0]) / 2;
        const y = (bounds[0][1] + bounds[1][1]) / 2;
        const scale = 0.9 / Math.max(dx / width, dy / height);
        const translate = [width / 2 - scale * x, height / 2 - scale * y];
        
        // 使用动画放大到所选国家
        svg.transition()
            .duration(750)
            .call(zoom.transform, d3.zoomIdentity
                .translate(translate[0], translate[1])
                .scale(scale));
    }
    
    function resetZoom() {
        svg.transition()
            .duration(750)
            .call(zoom.transform, d3.zoomIdentity);
    }
    
    function initializeIcons() {
        lucide.createIcons();
    }
    
    function zoomed(event) {
        d3.select("#world-map g").attr("transform", event.transform);
    }
    
    // 重置缩放按钮
    zoomResetButton.addEventListener("click", resetZoom);
});
