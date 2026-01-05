"use client";

import { useState } from "react";
import MagicalFrame from "@/components/MagicalFrame";
import FloatingElements from "@/components/FloatingElements";
import GalleryDialog from "@/components/GalleryDialog";

const heroResearch = {
  title:  `Startup intention of university students in the economic sector in Hanoi using structural equation modeling`,
  description: "This research examines the startup intentions of university students in the economic sector in Hanoi, using Structural Equation Modeling (SEM) as the primary analytical method. The study explores how key factors—such as entrepreneurial attitude, perceived behavioral control, and social influence—interact to shape students’ intentions to start a business. By applying SEM, the research provides a structured and data-driven understanding of the relationships between these variables, offering insights into the entrepreneurial mindset of young people in an urban academic context.",
  mediaUrl: "/RE.png",
  mediaType: "image" 
};

const researchPapers = [
  { 
    title: "VIETNAM'S STRATEGIC LOCATION AND WHY IT AFFECTS WORLD POLITICAL INFLUENCE", 
    description:  `Vietnam's location has consistently been regarded as a strategic advantage which had a profound impact on its political standing within the global scene. Vietnam is a Southeast Asian country sharing its borders with China in the north, Laos and Cambodia in the west, and the South China Sea in the east. Vietnam is an important player in regional and international geopolitics because it is located at the crossroads of major land and sea trade routes.

Vietnam geographically and spatially is in a very advantageous location. Vietnam is a natural bridge linking Asia's continental and maritime economic zones on the regional geopolitical map. Vietnam serves as a gateway to the Southeast Asian and Asian overland transport systems and a portal into the regional maritime economies. Vietnam is indeed an economic and strategic business center in Southeast Asia because the long and thin terrestrial and maritime border of Vietnam easily opens into the East China Sea and the Russian Far East. Vietnam also grants access to South Asia by land through roads via Bangladesh, Thailand, Myanmar, and Cambodia.

Being a sea nation, Vietnam is blessed with rich natural endowments, such as massive offshore deposits of oil and gas, vital to the Vietnamese economy and regional and global energy chain. Crucially, the South China Sea bordering Vietnam is an essential sea route between South Korea, Japan, and China, which are three of the world's largest economies.

Vietnam's integration into global supply chains runs deep due to its favorable geographical position. The nation has been a world factory in recent decades, receiving massive foreign direct investment (FDI) inflows. Its standing in international trade has also been cemented by its membership in a number of free trade agreements, including the EU-Vietnam Free commerce Agreement (EVFTA) and the Comprehensive and Progressive Agreement for Trans-Pacific Partnership (CPTPP).

Exports represent around 200% of the nation's GDP, making it one of the world's most open countries. As a significant trading partner to most of the world, Vietnam's openness not only sustains its economy but also its political clout.

Vietnam's geopolitical location is a major factor in its population profile as well as its overall profile. With the support of a stable policy for an expanding working population (15–59 years), Vietnam has seen a consistent growth in population and population density.

Vietnamese citizens are known for having a very strong sense of national solidarity and high level of adaptability. No significant ethnic split jeopardizes internal cohesion. In addition, Vietnamese citizens enjoy solid and peaceful religious and spiritual life, which facilitates their integration into the global society.

These traits also indicate that Vietnam's organic geopolitical strengths and social cohesion nicely fit into the inherent qualities of a regional power.

Vietnam's foreign policy, alternatively called "bamboo diplomacy," is strong and adaptable. By not choosing to belong to any one bloc, this policy enables Vietnam to be on good terms with all the great powers. Vietnam secures the safety of its national interests and promotes regional stability by practicing a variety of relations.

Vietnam has been successful in hosting important international events, engaging in international forums, and participating in peacekeeping missions as a result of this diplomatic approach. These interactions improve the global standing of Vietnam and solidify its adherence to a rules-based system of governance.

Vietnam has an illustrious history of national defense due to the fact that it is strategically situated, geopolitically. A well-fortified, capable community has been forged through more than 4,000 years of history, most of which has been spent in resistance to foreign occupiers. Vietnam's stand on independence and sovereignty has had a profound impact on the consciousness of the world. There are no direct threats to the stability of the Vietnamese political establishment, which is stable and robust. This stability assures continued policy implementation and promotes long-term planning of strategies.

Vietnam has all the inherent geopolitical qualities to be a great regional power in light of these general standards. The complete realization of economic influence, military power, civilian manufacturing capacity, scientific creativity, and transportation infrastructure are all yet unrealized. Vietnam has the potential to be an extremely powerful nation in Asia and the wider Indo-Pacific region if it can amass and utilize those fundamental components of national power.

The political power of Vietnam on the world stage is greatly enhanced by its strategic location. It became a key player in regional and global politics because of economic integration, adaptive diplomacy, and prioritizing security and development. It is an exemplary model for other countries in the same plight by navigating complicated geopolitical arenas with sustained national interests.

It takes a lengthy process of historical evolution to achieve and sustain geopolitical standing. While some nations have natural geopolitical benefits, the majority of others base their status on projecting their national power and strategic capabilities. Through concerted and concerted national effort, Vietnam is in a position to assertively reinforce its world influence.`
,
    mediaUrl: "/re1.png",
    mediaType: "image" 
  },
  { 
    title: "Is the Gig Economy a Hustle or a Bust for Young Workers?", 
    description: `The gig economy has transformed the modern workforce, offering flexibility and autonomy to millions of workers worldwide. However, this shift towards freelance and contract work presents significant financial challenges, particularly for young adults entering the job market. This article explores the financial dilemmas posed by the gig economy and their implications for the financial future of young workers.

The gig economy has transformed the modern workforce, offering flexibility and autonomy to millions of workers worldwide. However, this shift towards freelance and contract work presents significant financial challenges, particularly for young adults entering the job market. While the gig economy appeals to many due to its flexible work hours and the ability to select projects of interest, it also introduces a series of financial hurdles that can complicate achieving long-term financial stability.

Technological advancements have played a crucial role in the rise of the gig economy. Platforms like Uber, Lyft, Fiverr, and Upwork have made it easier for workers to connect with clients and find gig opportunities. These platforms offer a wide range of services, from ride-sharing and food delivery to freelance writing and graphic design. The convenience and accessibility of these platforms have made gig work an attractive option for young adults seeking flexibility and independence in their professional lives. According to a 2020 report by the Pew Research Center, around 16% of Americans have earned money through online gig platforms.

One of the primary financial challenges of gig work is income instability. Unlike traditional employment, where workers receive a steady paycheck, gig workers often experience fluctuating earnings. This variability makes it difficult to predict and plan for their financial future, leading to financial stress and difficulties in managing day-to-day expenses. For young adults, who may already be navigating student loan debt and the costs associated with early adulthood, this unpredictability can be particularly burdensome. For instance, a survey by the Federal Reserve found that 58% of gig workers reported that their incomes vary significantly from month to month.

The lack of benefits is another significant issue for gig workers. Traditional employees often receive benefits such as health insurance, retirement plans, paid time off, and unemployment insurance. In contrast, gig workers are typically classified as independent contractors and therefore do not have access to these benefits. This lack of a safety net can leave gig workers vulnerable, particularly in times of illness or economic downturns. Without employer-sponsored health insurance, many gig workers face high out-of-pocket medical expenses, which can quickly erode their savings. A 2019 study by the Kaiser Family Foundation found that 22% of gig workers do not have health insurance, compared to 10% of traditional workers.

Gig workers are also responsible for their own taxes. As independent contractors, they must pay self-employment taxes, which cover Social Security and Medicare contributions. This additional tax burden can be a shock to many young workers who are unprepared for the complexities of tax responsibilities. Failure to set aside sufficient funds for taxes can lead to potential issues with the Internal Revenue Service (IRS) and unexpected tax bills, further complicating their financial situation. For example, a study by the Government Accountability Office found that 22% of gig workers reported difficulties in paying their taxes on time.

Accessing credit can also be challenging for gig workers. Income instability and a lack of traditional employment history can make it difficult to qualify for loans and credit cards. Lenders often view gig workers as higher-risk borrowers, resulting in higher interest rates or difficulties in securing loans for major purchases, such as homes or cars. This barrier can hinder young workers' ability to build wealth and achieve significant financial milestones, such as buying a home or starting a business. For instance, a 2020 report by the Urban Institute found that gig workers are 27% more likely to have difficulty accessing credit than traditional workers.

Without employer-sponsored retirement plans, gig workers must take on the responsibility of saving for their own retirement. However, the combination of income instability and lack of financial literacy can make it challenging for young workers to prioritize retirement savings. Many young gig workers may not fully understand the importance of saving for the future or may feel overwhelmed by the immediate demands on their income. This lack of preparation can lead to inadequate savings and financial insecurity in later life. According to a 2018 survey by the Transamerica Center for Retirement Studies, only 16% of gig workers have a retirement account compared to 52% of traditional workers.

The lack of a financial safety net in the gig economy can leave workers economically vulnerable. In the absence of benefits like unemployment insurance, gig workers may struggle to stay afloat during periods of low demand or economic downturns. This vulnerability can perpetuate a cycle of financial instability and hardship, making it difficult for gig workers to achieve long-term financial goals. The COVID-19 pandemic highlighted this issue, as many gig workers faced significant income losses and had little recourse for financial assistance. According to a study by the Aspen Institute, 46% of gig workers reported a significant loss of income during the early months of the pandemic.

The gig economy also has the potential to exacerbate financial inequality. While some individuals may thrive in this environment, leveraging their skills and flexibility to achieve financial success, others may find themselves trapped in low-paying gigs with little opportunity for advancement. This disparity can widen the income gap between those who can effectively navigate the gig economy and those who cannot, leading to increased financial inequality. A study by the Brookings Institution found that high-income individuals are more likely to use gig work to supplement their earnings, while low-income individuals rely on gig work as their primary source of income.

Despite these challenges, the gig economy continues to grow, and its impact on the workforce is undeniable. As more young adults enter the gig economy, it is crucial to recognize and address the financial challenges they face. Policymakers, gig platforms, and financial institutions must work together to create solutions that support gig workers' financial stability and growth.

For policymakers, this might involve implementing regulations that ensure gig workers have access to essential benefits such as health insurance, retirement plans, and unemployment insurance. Creating a framework that protects gig workers' rights and provides them with a safety net can help mitigate some of the financial risks associated with gig work.

Gig platforms can also play a role in supporting their workers. By offering resources and tools that help gig workers manage their finances, platforms can empower workers to make informed financial decisions. This could include financial literacy programs, tax assistance, and savings plans specifically designed for gig workers.

Financial institutions can develop products and services tailored to the unique needs of gig workers. Flexible loan options, credit products that consider gig work income, and retirement savings plans that accommodate irregular income can help gig workers build financial stability.

The gig economy presents a unique set of financial challenges for young workers. While it offers flexibility and autonomy, it also brings income instability, lack of benefits, and long-term financial implications that can hinder financial security and growth. As the gig economy continues to evolve, it is crucial to recognize and address these challenges to ensure that young workers can build a stable and prosperous financial future.`
,
    mediaUrl: "/re2.png",
    mediaType: "image" 
  },
  { 
    title: "WOMEN IN STEM", 
    description: `In recent years, the underrepresentation of women in STEM fields has become a topic of growing concern. Although remarkable progress has been made in gender equality, women are still less likely to pursue careers in science, technology, engineering, and mathematics compared to men. This imbalance not only reflects social and cultural barriers but also limits the potential for innovation and development.

One of the main reasons for this disparity is the persistence of stereotypes. For decades, science and engineering have been perceived as male-dominated fields, discouraging many girls from pursuing these subjects from an early age. A UNESCO report in 2019 revealed that women accounted for less than 30 percent of researchers worldwide. This clearly demonstrates how cultural expectations and gender bias continue to shape educational and career choices.

Another factor is the lack of female role models in STEM. When young women rarely see successful female scientists or engineers represented in the media or academia, they may feel that these fields are not welcoming or suitable for them. In addition, workplace discrimination, unequal pay, and limited career advancement opportunities also discourage many women from remaining in STEM professions. For example, research by the World Economic Forum highlighted that women in technology roles often face higher attrition rates than their male counterparts.

Encouraging more women to join and remain in STEM is not only a matter of fairness but also of practical necessity. Studies by McKinsey & Company have shown that companies with greater gender diversity are more innovative and financially successful. By involving women in solving scientific and technological challenges, societies can benefit from diverse perspectives, which often lead to more creative and inclusive solutions.

In conclusion, increasing women’s participation in STEM requires a multifaceted approach. Governments and institutions should promote equal access to education, provide scholarships for female students in STEM, and ensure inclusive workplace policies. At the same time, changing cultural perceptions and highlighting female role models are essential to inspiring the next generation. Greater involvement of women in STEM will not only promote gender equality but also drive global progress.`
,
    mediaUrl: "/re3.png",
    mediaType: "image" 
  },
  { 
    title: "MERGING PROVINCES IN VIETNAM: OPPORTUNITIES AND CHALLENGES", 
    description: `The Politburo’s proposal to merge provinces has created a wide range of opinions across society. As Vietnam enters a new era of administrative restructuring, this policy is viewed as a suitable move. However, alongside its significant potential, the process of merging provinces presents numerous complex challenges related to governance, the economy, and social cohesion.

One of the most prominent advantages is the potential to optimize the administrative system. Combining smaller provinces into larger, unified units can reduce operating costs, eliminate intersecting responsibilities, and improve the effectiveness of state management. A more compact and efficient government is expected to enhance flexibility in administration, increase institutional productivity, and provide more practical needs.

Next, from an economic standpoint, the formation of larger administrative regions offers favorable conditions for developing strong regional economies. Provinces with greater land area and larger populations are more likely to become economic centers capable of attracting both domestic and international investors. A broader market and a more plentiful labor force make these regions more competitive. At the same time, smaller or less developed provinces can benefit from the strengths of their more prosperous counterparts, gaining access to investment, infrastructure, and supportive policies. This helps narrow development gaps between provinces and reduce differences in living standards and growth opportunities among them.

Socially, when resources are concentrated in larger, more centralized areas instead of being spread widely across smaller ones, infrastructure planning, industrial development, urbanization, and transportation systems can become more ordered. Merging provinces allows for more efficient arrangement of public services, for instance healthcare, education, and transport, as budgets and resources are more combined. In addition, greater cultural exchange and social interaction among regions may help foster a more cohesive and hospitable society. Despite these promising prospects, the restructuring process poses several challenges that require careful attention. In terms of administration, merging provinces will definitely lead to changes in personnel, the disagreement in reorganization of local government structures, and adjustments to the management system from provincial down to lower levels. Government officials may face unemployment or reassignment and may experience uncertainty due to changes in their work environment. Moreover, harmonizing policies, regulations, and compensation schemes across different regions is a complicated task. Without proper coordination, it could lead to clashes in authority, conflicts of interest, or dissatisfaction among citizens and public servants.

When provinces are merged, big differences in their economic development can cause problems. Richer provinces may have to share their money and investment opportunities with poorer ones. This could make them less competitive and slow down their growth. Culturally, each province has its own identity—different ways of speaking, local traditions, and community ties. If the merger isn’t handled carefully, these unique features could be lost. People might also get upset if the new province changes names, symbols, or moves the capital to another location. Geography and infrastructure also matter. If the new administrative center is too far from where most people live, it will be harder for them to get basic public services. Without careful planning, important services like schools, hospitals, and social support could be disrupted during the transition. We can learn from other countries. In many cases, merging provinces only works well if it comes with deeper and carefully planned reforms, especially giving more power to local authorities and investing in infrastructure. Digital tools, such as online government services and simple electronic processes, help people get what they need faster and avoid long, complicated paperwork. How the government communicates and manages staff during the change is also crucial. For example, Denmark created a clear plan, asked experts for advice, and listened to the public before making decisions. They also had fair policies for civil servants, which helped avoid conflicts. In Germany, two districts could only merge if it was truly needed and had clear benefits. The government shared data and forecasts openly to gain public trust. For Vietnam to succeed in merging provinces, the government must focus on improving services for its people. The goal shouldn’t just be about changing borders, it should be about creating a strong, modern, more people-oriented and sustainable government. Only then will these changes truly help the country grow and improve lives.`
,
    mediaUrl: "/re4.png",
    mediaType: "image" 
  },
];

const allResearch = [heroResearch, ...researchPapers];

export default function Research() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = (index: number) => {
    setActiveIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen py-16 px-6 md:px-12 lg:px-20 relative overflow-hidden bg-[#feeaf0]">
      <FloatingElements />

      <header className="mb-20 text-center relative z-10">
        <h1 className="font-fairy text-6xl md:text-8xl text-[#d88a9e] text-shadow-fairy mb-6 tracking-tight">
          Research & Journals
        </h1>
        <p className="font-aesthetic text-2xl md:text-3xl text-[#9a7c85]">
          Investigating the wonders of the enchanted world
        </p>
      </header>

      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        {/* Hero Image */}
        <div className="w-full max-w-4xl mx-auto">
          <MagicalFrame
            title={heroResearch.title}
            description={heroResearch.description}
            mediaUrl={heroResearch.mediaUrl}
            mediaType={heroResearch.mediaType}
            index={0}
            aspectRatio="video"
            className="shadow-2xl"
            onClick={() => openGallery(0)}
          />
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          {researchPapers.map((paper, index) => (
            <div key={index} className="w-full">
                <MagicalFrame
                  title={paper.title}
                  description={paper.description}
                  mediaUrl={paper.mediaUrl}
                  mediaType={paper.mediaType}
                  index={index + 1}
                  aspectRatio="square"
                  isCompact={true}
                  className="shadow-xl"
                  onClick={() => openGallery(index + 1)}
                />
            </div>
          ))}
        </div>
      </div>

      <GalleryDialog 
        isOpen={isGalleryOpen} 
        onOpenChange={setIsGalleryOpen} 
        items={allResearch} 
        activeIndex={activeIndex} 
      />

      <section className="mt-28 max-w-4xl mx-auto text-center relative z-10">
        <div className="glass-card rounded-[3rem] p-10 md:p-16 border border-[#e8a4b8]/20 relative overflow-hidden">
          <h2 className="font-fairy text-3xl md:text-4xl text-[#d88a9e] mb-6">
            The Quest for Knowledge
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-[#5c4a50] italic leading-relaxed mb-10">
            &quot;Research is the magnifying glass of the garden. It allows us to 
            see the magic in the smallest seed and understand the grand symphony.&quot;
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Science", "Art", "Sensory", "Expression", "Magic"].map((field, i) => (
              <span key={i} className="px-6 py-2 rounded-full border border-[#e8a4b8]/30 font-aesthetic text-[#d88a9e] glass-card">
                {field}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="mt-24 pb-12 text-center relative z-10">
        <p className="font-aesthetic text-lg text-[#9a7c85] mt-4">
          Curiosity is the sunlight of the garden
        </p>
      </footer>
    </div>
  );
}
