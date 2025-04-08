let contents = [

    {id:'btn1' , title:'Sea Surface Emissions' , text:'Sea surface emissions occur as a result of natural processes in the oceans. Wind action, wave breaking, and biological activity contribute to the release of sea salt aerosols, organic compounds, and natural particles into the atmosphere. These emissions are an inherent part of the marine ecosystem and contribute to the background level of air pollutants. Sea surface emissions can be transported over long distances by wind currents, affecting air quality in various regions.'},
    {id:'btn2',  title:'Forested Areas' , text:'Forested areas play a crucial role in the release of air pollutants through natural processes. Trees and plants within forests release biogenic volatile organic compounds (BVOCs) and natural particulate matter. BVOCs are organic compounds emitted by plants and trees, and they include substances such as terpenes and isoprenes. These compounds can react with other pollutants in the atmosphere to form secondary pollutants, contributing to air pollution. Additionally, natural emissions from vegetation occur through processes such as plant respiration, decay of organic matter, and the release of pollen and spores.'},
    {id:'btn3',  title:'Soil Dust' , text:'Soil dust particles are generated through natural processes such as wind erosion, volcanic activity, and desertification. These processes disturb the soil and release dust particles into the air. Soil dust can contain a mixture of mineral matter, organic material, and pollutants that have accumulated in the environment. Wind currents can transport soil dust over long distances, resulting in air pollution in regions far from the original source. The composition of soil dust can vary depending on the geographical location and underlying soil characteristics.'},
    {id:'btn4',  title:'Pollen and Biological Matter' , text:'Pollen grains and other biological matter from plants and trees can contribute to air pollution, particularly during the pollination season. Pollen is released into the air as part of the reproductive process of plants. These airborne particles can trigger allergic reactions and respiratory issues in individuals who are sensitive or allergic to specific types of pollen. In addition to pollen, other biological matter such as spores, fungal fragments, and plant debris can also contribute to airborne pollutants, especially in environments with abundant vegetation.'},
    {id:'btn5',  title:'Motor Vehicle Emissions' , text:'Motor vehicles, including cars, motorcycles, and trucks, emit pollutants during the combustion of fossil fuels. The exhaust gases released from vehicles contain various air pollutants, including nitrogen oxides (NOx), carbon monoxide (CO), volatile organic compounds (VOCs), and particulate matter (PM). These pollutants are produced as a result of incomplete combustion and the chemical reactions that occur within the engine. Motor vehicle emissions are a significant contributor to urban air pollution, particularly in densely populated areas and along busy roadways.'},
    {id:'btn6',  title:'Industrial Activities' , text:'Industrial processes encompass a wide range of activities, including manufacturing, power generation, and chemical production. These activities release pollutants into the atmosphere, contributing to air pollution. Pollutants commonly emitted from industrial sources include sulfur dioxide (SO2), nitrogen oxides (NOx), particulate matter (PM), and volatile organic compounds (VOCs). These emissions result from the burning of fossil fuels for energy, industrial operations such as combustion processes, and chemical reactions involved in various manufacturing processes. Industrial emissions are often concentrated around industrial facilities and can have both local and regional impacts on air quality.'},
    {id:'btn7',  title:'Biomass Burning' , text:'Biomass burning refers to the intentional or unintentional combustion of organic materials such as agricultural waste, crop residues, and forest biomass. This process releases smoke, ash, and pollutants into the air. Biomass burning can occur as a result of land-clearing practices, deforestation-related activities, and wildfires. The pollutants released during biomass burning include carbon monoxide (CO), nitrogen oxides (NOx), volatile organic compounds (VOCs), and particulate matter (PM). The severity of biomass burning impacts air quality, particularly in rural areas and during periods of increased burning activities.'},
    {id:'btn8',  title:'Open Burning' , text:'Open burning involves the uncontrolled burning of waste materials, including domestic, agricultural, and industrial waste. This practice is prevalent in certain areas of India and contributes to air pollution. Open burning releases harmful gases such as sulfur dioxide (SO2), nitrogen oxides (NOx), carbon monoxide (CO), and hazardous air pollutants. These pollutants can have detrimental effects on air quality, human health, and the environment. Open burning of waste is often associated with improper waste management practices and poses significant health risks to nearby communities.'},
    {id:'btn9',  title:'Construction and Demolition Activities' , text:'Construction and demolition activities generate dust, particulate matter, and pollutants, especially in urban areas experiencing rapid development. Dust is released into the air during excavation, demolition, material handling, and construction operations. The pollutants associated with construction and demolition activities include fine particles, silica dust, asbestos fibers, and chemicals present in construction materials. These activities contribute to localized air pollution, affecting the immediate surroundings and potentially impacting the health of workers and nearby residents.'},
    {id:'btn10',  title:'Industrial and Agricultural Emissions' , text:'Industrial emissions encompass a wide range of sectors, including chemical plants, refineries, and manufacturing facilities. These industries release various pollutants into the air, such as sulfur dioxide (SO2), nitrogen oxides (NOx), particulate matter (PM), volatile organic compounds (VOCs), and greenhouse gases. The specific pollutants emitted depend on the nature of the industrial process and the types of chemicals involved. Agricultural practices, such as pesticide application, fertilizer use, and livestock farming, also contribute to air pollution through the release of chemicals and ammonia. These emissions can have both local and regional impacts on air quality and human health.'},
    {id:'btn11',  title:'Respiratory Issues' , text:'Air pollution, particularly fine particulate matter (PM2.5) and toxic gases, can have profound impacts on respiratory health. When inhaled, these pollutants can penetrate deep into the respiratory system, causing irritation and inflammation of the airways. Prolonged exposure to air pollution can lead to the development or exacerbation of respiratory conditions such as asthma, bronchitis, and chronic obstructive pulmonary disease (COPD). The fine particles can trigger oxidative stress and inflammation in the lungs, compromising lung function and leading to symptoms such as coughing, wheezing, and shortness of breath. Long-term exposure to air pollution may also contribute to the progression of respiratory diseases.'},
    {id:'btn12',  title:'Cardiovacular Effects' , text:'The detrimental effects of air pollution extend to the cardiovascular system. Fine particulate matter (PM2.5) and pollutants like nitrogen dioxide (NO2) and ozone (O3) can enter the bloodstream through inhalation and induce systemic inflammation and oxidative stress. These processes can damage blood vessels, promote the formation of arterial plaques, and increase the risk of cardiovascular diseases. Long-term exposure to air pollution has been associated with a higher incidence of heart attacks, strokes, high blood pressure, and other cardiovascular conditions. Additionally, the presence of air pollution can disrupt normal heart rhythm and impair cardiac function.'},
    {id:'btn13',  title:'Impaired Lung Development' , text:'Children exposed to air pollution during critical stages of lung development are particularly vulnerable to long-term health impacts. Inhalation of pollutants can hinder proper lung growth and development, leading to reduced lung function and capacity. Impaired lung development during childhood may increase the risk of respiratory infections and hinder overall respiratory health throughout life. Furthermore, early exposure to air pollution can contribute to the onset of respiratory conditions and allergies in children.'},
    {id:'btn14',  title:'Allergies and Allergic Reactions' , text:'Air pollution can worsen allergies and trigger allergic reactions in susceptible individuals. Pollen, mold spores, and dust mites, which are common airborne allergens, can interact with air pollutants, such as diesel exhaust particles. This interaction can enhance the allergic response and exacerbate symptoms in individuals with allergies or asthma. The presence of air pollution can cause increased inflammation in the airways, leading to heightened respiratory distress, allergic rhinitis, and other allergic reactions.'},
    {id:'btn15',  title:'Increased Risk of Cancer' , text:'Prolonged exposure to certain air pollutants has been linked to an increased risk of developing cancer. Carcinogens present in air pollution, such as benzene, formaldehyde, and polycyclic aromatic hydrocarbons (PAHs), can lead to genetic mutations and cellular damage. When inhaled, these carcinogens can accumulate in the respiratory system and potentially initiate or promote the development of cancer cells. Lung cancer is the most commonly associated cancer with air pollution, but other types of cancer, including bladder, breast, and skin cancer, have also been linked to exposure to specific pollutants.'},
    {id:'btn16',  title:'Impact on Cognitive Health' , text:'Studies suggest that air pollution can have detrimental effects on cognitive function and brain health. Fine particulate matter (PM2.5) and toxic air pollutants can enter the bloodstream and reach the brain, leading to neuroinflammation and oxidative stress. Chronic exposure to air pollution has been associated with an increased risk of cognitive decline, neurodevelopmental disorders in children, and neurodegenerative diseases in the elderly. Cognitive domains such as attention, memory, language, and executive functions may be adversely affected by air pollution.'},
    {id:'btn17',  title:'Environmental Damage' , text:`Air pollution not only affects human health but also has severe impacts on the environment. Pollutants released into the atmosphere contribute to the formation of smog, which reduces visibility and degrades air quality. Acid rain, caused by pollutants such as sulfur dioxide (SO2) and nitrogen oxides (NOx), can harm vegetation, forests, and aquatic ecosystems. Ozone depletion, primarily caused by chlorofluorocarbons (CFCs) and other ozone-depleting substances, has detrimental effects on the ozone layer, leading to increased ultraviolet (UV) radiation reaching the Earth's surface. Air pollution also contributes to biodiversity loss and ecological imbalances, affecting the health and survival of plants, animals, and marine life.`},
    {id:'btn18',  title:'Economic Costs' , text:'Air pollution imposes significant economic burdens on societies. The healthcare expenses associated with treating air pollution-related illnesses, including respiratory and cardiovascular diseases, can be substantial. Productivity losses occur due to increased sick days, reduced work capacity, and decreased cognitive function among affected individuals. Furthermore, air pollution can cause damage to infrastructure, buildings, and property, necessitating costly repairs and maintenance. Governments and communities bear the financial burden of implementing pollution control measures, such as investing in cleaner technologies, improving air quality monitoring systems, and implementing regulations to reduce emissions.'},
    {id:'btn19',  title:'Transition to Clean Energy' , text:'Stricter emission standards can be implemented for industries, setting limits on the release of pollutants such as sulfur dioxide (SO2), nitrogen oxides (NOx), and particulate matter (PM). Governments can provide incentives for industries to adopt cleaner technologies, such as catalytic converters, scrubbers, and filters, which help capture and remove pollutants before they are released into the atmosphere. Encouraging industries to use cleaner fuels, such as natural gas or biofuels, instead of coal or oil, can also significantly reduce air pollution. <br><br> Making this transition involves the installation of solar panels, wind turbines, and hydroelectric plants to generate electricity without emitting greenhouse gases. It also includes supporting research and development efforts to improve the efficiency and affordability of clean energy technologies. Governments can provide incentives and subsidies to encourage the adoption of clean energy solutions, such as feed-in tariffs, tax credits, and grants. Additionally, promoting energy efficiency measures and encouraging the use of energy-saving appliances can further reduce the demand for energy and lower emissions.'},
    {id:'btn20',  title:'Improved Industrial Practices' , text:'Industries are significant sources of air pollution due to their emissions of pollutants and greenhouse gases. Implementing improved industrial practices is crucial to reduce these emissions and minimize their environmental impact. This involves adopting cleaner production methods, optimizing manufacturing processes, and investing in advanced pollution control technologies. <br><br> Stricter emission standards can be implemented for industries, setting limits on the release of pollutants such as sulfur dioxide (SO2), nitrogen oxides (NOx), and particulate matter (PM). Governments can provide incentives for industries to adopt cleaner technologies, such as catalytic converters, scrubbers, and filters, which help capture and remove pollutants before they are released into the atmosphere. Encouraging industries to use cleaner fuels, such as natural gas or biofuels, instead of coal or oil, can also significantly reduce air pollution.'},
    {id:'btn21',  title:'Enhancing Transportaion Systems' , text:'Transportation is a major contributor to air pollution, primarily through emissions from vehicles running on fossil fuels. Enhancing transportation systems can help reduce vehicle emissions and improve air quality. Governments can promote the use of public transportation by improving its accessibility, affordability, and efficiency. Expanding public transportation networks, implementing integrated ticketing systems, and providing incentives for using public transport, such as discounted fares or priority lanes, can encourage more people to opt for sustainable modes of transport. <br><br> Promoting electric vehicles (EVs) is another effective measure to combat air pollution. Governments can provide incentives, such as tax credits or rebates, to encourage the purchase of EVs and expand the charging infrastructure. Investing in charging stations and offering subsidies for EV charging infrastructure installation can help alleviate range anxiety and increase the adoption of electric vehicles. <br><br> Creating cycling and walking-friendly infrastructure, such as dedicated lanes, bike-sharing programs, and pedestrian-friendly streets, promotes active transportation and reduces reliance on motorized vehicles. Implementing efficient traffic management systems, including intelligent transportation systems and congestion pricing schemes, helps optimize traffic flow and reduce emissions from idling vehicles. Carpooling and ridesharing initiatives can also contribute to reducing the number of vehicles on the road, thereby decreasing overall emissions.'},
    {id:'btn22',  title:'Strengthening Environmental Regulations' , text:'Establishing and enforcing stringent environmental regulations and standards is vital for controlling and reducing air pollution. Governments need to set clear emission limits for various industries, enforce compliance with these standards, and impose penalties for non-compliance. Regular inspections, monitoring, and reporting of emissions can help ensure that industries adhere to the regulations. <br><br> Vehicle emission standards should be established and enforced, requiring manufacturers to produce vehicles with lower emissions of pollutants such as nitrogen oxides (NOx), particulate matter (PM), and volatile organic compounds (VOCs). Regular emission testing and inspections can be implemented to ensure vehicles meet the required standards. Additionally, enforcing regulations on the import and use of high-polluting vehicles can help prevent the influx of vehicles that do not meet emission standards. <br><br> To support regulatory efforts, governments can invest in monitoring and air quality management systems. This includes deploying air quality monitoring stations, using satellite data, and employing advanced modeling techniques to track air pollution levels and identify pollution hotspots. The data collected can guide policy decisions and enable timely interventions to address air pollution issues.'},
    {id:'btn23',  title:'Promoting Sustainable Agriculture' , text:'Agricultural activities contribute to air pollution through practices such as burning crop residues and the excessive use of fertilizers. Promoting sustainable agriculture techniques can help reduce these emissions and improve air quality. <br><br> Encouraging organic farming practices, which minimize the use of synthetic pesticides and fertilizers, reduces the release of pollutants into the air. Organic farming methods prioritize soil health and biodiversity, promoting natural pest control and nutrient cycling. By avoiding the use of chemical fertilizers, organic farming helps mitigate the release of nitrogen oxide (NOx) emissions, which contribute to air pollution and the formation of smog. <br><br> Implementing crop rotation, which involves alternating crops in a specific sequence, helps control pests and diseases naturally, reducing the need for chemical pesticides. Precision agriculture techniques, such as using satellite imagery and sensors to optimize fertilizer application, help farmers apply the right amount of nutrients at the right time, minimizing excess fertilizer usage and nitrogen oxide emissions. <br><br> Incentivizing sustainable land management practices, such as conservation tillage and agroforestry, can help reduce soil erosion, enhance soil quality, and minimize the release of particulate matter into the air. These practices promote carbon sequestration in soils and vegetation, contributing to climate change mitigation while reducing air pollution.'},
    {id:'btn24',  title:'Reforestation and Green Spaces' , text:'Planting trees and creating green spaces in urban areas can significantly contribute to improving air quality and mitigating air pollution. Trees play a crucial role in reducing air pollution by absorbing carbon dioxide and other harmful pollutants, while releasing oxygen through the process of photosynthesis. Their leaves act as natural filters, capturing particulate matter and absorbing pollutants from the air. <br><br> Reforestation efforts involve planting trees in deforested or degraded areas, helping restore ecosystems, increase biodiversity, and improve air quality. Governments, local authorities, and environmental organizations can collaborate to identify suitable areas for reforestation projects and engage local communities in tree planting initiatives. Prioritizing native tree species ensures the resilience and sustainability of reforestation efforts. <br><br> Creating green spaces within urban areas, such as parks, gardens, and green roofs, offers multiple benefits for air quality improvement. These green areas provide habitats for plants, birds, and insects, contributing to urban biodiversity. Vegetation in urban green spaces helps trap pollutants, reduce heat island effects, and enhance overall air quality. Furthermore, urban green spaces provide recreational areas, improve mental well-being, and contribute to the aesthetic appeal of cities.'},
    {id:'btn25',  title:'Education and Awareness' , text:'Increasing public awareness about the causes and impacts of air pollution is crucial for fostering individual and collective actions to combat this issue. Education campaigns, public outreach programs, and environmental initiatives can play a vital role in informing the public about the importance of reducing emissions, adopting sustainable practices, and making environmentally conscious choices. <br><br> Educational programs can be implemented in schools, universities, and community centers to teach children and young adults about the sources and effects of air pollution, as well as the actions they can take to reduce their contribution to it. Promoting environmental literacy equips individuals with knowledge and skills to make informed decisions regarding their daily activities, such as transportation choices, energy consumption, and waste management. <br><br> Awareness campaigns can be conducted through various media channels, including television, radio, social media, and public advertisements. These campaigns can highlight the health impacts of air pollution, showcase success stories of pollution reduction measures, and provide practical tips for individuals to reduce their exposure to air pollutants. Engaging community leaders, environmental organizations, and local businesses in these awareness campaigns helps amplify the message and create a culture of environmental responsibility.'},
    {id:'btn26',  title:'International Cooperation' , text:'Air pollution is a global issue that requires collaboration and cooperation among countries. Transboundary air pollution can occur when pollutants generated in one country travel across borders, impacting air quality in neighboring regions. Therefore, international cooperation is crucial to effectively address air pollution and work towards cleaner air on a global scale. <br><br> Countries can collaborate through international agreements, such as the United Nations Framework Convention on Climate Change (UNFCCC) and the Convention on Long-Range Transboundary Air Pollution (CLRTAP), to develop common strategies, share best practices, and set emission reduction targets. Through these agreements, countries can work together to develop and implement policies and measures to reduce air pollution and mitigate climate change. <br><br> Sharing scientific knowledge, research findings, and technological advancements among nations can foster innovation and accelerate the development and deployment of clean technologies. Financial and technical assistance can be provided to developing countries to support their efforts in reducing air pollution and transitioning to cleaner energy sources. <br><br> International cooperation can also involve joint initiatives to address specific air pollution challenges, such as reducing emissions from shipping and aviation, improving indoor air quality in developing countries, and managing transboundary pollution from industrial activities. By working together, countries can leverage their collective resources and expertise to tackle air pollution effectively and create a healthier and more sustainable future.'}
]

let dialog = document.querySelector('dialog')
let close = document.querySelector('#close')
let open = document.querySelectorAll ('.open')
let content = document.querySelector('.content')
let title = document.querySelector('.title')

document.querySelectorAll('.open').forEach(occurence => {
    occurence.addEventListener('click', function() {
        dialog.showModal()
    } )
})

document.querySelectorAll('button').forEach(occurence => {
    let id = occurence.getAttribute('id')
    occurence.addEventListener('click', function() {
        for (let key in contents){
            if(id === contents[key].id){
                title.innerHTML = contents[key].title
                content.innerHTML = contents[key].text
            }
        }
    } )
})

close.addEventListener('click',function() {
    dialog.classList.add('hide')
    dialog.addEventListener('webkitAnimationEnd',function() {
        dialog.classList.remove('hide')
        dialog.close()
        dialog.removeEventListener('webkitAnimationEnd',arguments.callee,false)
    },false)
})
