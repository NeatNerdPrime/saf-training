import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a as n,b as t,e as o,d as s,w as r,r as p,o as c}from"./app-CuB3TegB.js";const h="/saf-training/assets/VendorSTIGProcess-DV9B94oC.png",d={},m={class:"footnotes"},f={class:"footnotes-list"},u={id:"footnote1",class:"footnote-item"};function g(y,e){const a=p("RouteLink");return c(),l("div",null,[e[9]||(e[9]=n('<h2 id="_13-1-notes-on-formally-publishing-a-stig" tabindex="-1"><a class="header-anchor" href="#_13-1-notes-on-formally-publishing-a-stig"><span>13.1 Notes on Formally Publishing a STIG</span></a></h2><figure><img src="'+h+'" alt="The STIG Process" tabindex="0" loading="lazy"><figcaption>The STIG Process</figcaption></figure><p>Most of this section is informed by DISA&#39;s own published guidance for the Vendor STIG Process, as well as the experiences of external teams and Vulcan stakeholders who have undergone the STIG creation process.</p><p>We recommend that you review the official Vendor STIG Process guide<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup> if you want to undergo the process.</p><div class="hint-container tip"><p class="hint-container-title">Using Vulcan for Aritifact Management</p><p>DISA will require you to provide your draft content for review in Excel format.</p><p>That is to say, DISA&#39;s process is completely separate to Vulcan, and they will not need access to it.</p><p>Luckily, Vulcan can both export STIG-ready content to Excel format for DISA to ingest, and load reviewed content from DISA as a separate Component for easy comparison.</p></div><h2 id="_13-2-starting-the-process" tabindex="-1"><a class="header-anchor" href="#_13-2-starting-the-process"><span>13.2 Starting the Process</span></a></h2><p>First and foremost - reach out early!</p><p>DISA created the Vendor STIG Process to ensure that the content produced by the vendor community is up to DOD standard. As such, DISA prefers to meet with the STIG-ready content team before the content is written to discuss the characteristics of the software component the team is trying to write guidance for.</p><p>DISA will also provide guidance on which SRG (or set of SRGs) should be selected as a foundation.</p><div class="hint-container note"><p class="hint-container-title">Do I need to be the actual vendor to publish my content?</p><p>Not necessarily. DISA certainly expects that most people who look to formally publish STIG content will be the vendor that created a particular software component, but this is not required.</p><p>If you expect that the content you have created for a component for one project would be:<br> a) useful to the wider security community, or<br> b) useful to you personally on a later project<br> then reach out to DISA to formally publish it.</p></div><h3 id="_13-2-1-writing-style" tabindex="-1"><a class="header-anchor" href="#_13-2-1-writing-style"><span>13.2.1 Writing Style</span></a></h3>',11)),t("p",null,[e[1]||(e[1]=o("Remember that STIGs need to be very precise about the language used in their requirements. See the discussions in ")),s(a,{to:"/courses/guidance/08.html"},{default:r(()=>e[0]||(e[0]=[o("Section 8")])),_:1}),e[2]||(e[2]=o(" of this class for details on the correct syntax and writing style notes for the Check and Fix fields."))]),e[10]||(e[10]=n('<h2 id="_13-3-stages-of-stig-development" tabindex="-1"><a class="header-anchor" href="#_13-3-stages-of-stig-development"><span>13.3 Stages of STIG Development</span></a></h2><p>DISA&#39;s documentation on the STIG process<sup class="footnote-ref"><a href="#footnote1">[1:1]</a><a class="footnote-anchor" id="footnote-ref1:1"></a></sup> breaks it down into four development stages after the initial SRG selection, punctuated by frequent updates to and review by the agency. After the external author team finishes STIG development, there are a few more internal reviews at DISA before the final decision is made to publish.</p><h3 id="_13-3-1-stage-1-stig-development-the-first-ten-requirements" tabindex="-1"><a class="header-anchor" href="#_13-3-1-stage-1-stig-development-the-first-ten-requirements"><span>13.3.1 Stage 1 STIG Development (The First Ten Requirements)</span></a></h3><p>The author team will first fill out a total of 10 of the requirements in the STIG document, where the 10 requirements are a mix of all statuses (Applicable – Configurable, Applicable – Inherently Meets, Applicable – Does Not Meet, and Not Applicable).</p><h3 id="_13-3-2-stage-2-stig-development" tabindex="-1"><a class="header-anchor" href="#_13-3-2-stage-2-stig-development"><span>13.3.2 Stage 2 STIG Development</span></a></h3><p>If this initial round of requirements are written satisfactorily, the author team can continue work on the STIG content for 30 days before the next work-in-progress review from DISA. The agency may give further feedback on areas to improve at this point before continuing.</p><h3 id="_13-3-3-stage-3-stig-development" tabindex="-1"><a class="header-anchor" href="#_13-3-3-stage-3-stig-development"><span>13.3.3 Stage 3 STIG Development</span></a></h3><p>The author team can continue writing STIG content for another 30 days (a total of 60 days after the initial decision to proceed) before the next round of work-in-progress review from DISA. The agency may give further feedback on areas to improve at this point before continuing.</p><h3 id="_13-3-4-stage-4-stig-development" tabindex="-1"><a class="header-anchor" href="#_13-3-4-stage-4-stig-development"><span>13.3.4 Stage 4 STIG Development</span></a></h3><p>After another 30 days (90 days total from the initial decision to proceed) the author team should submit a completed initial draft of the STIG to DISA for a full validation of the content.</p><h3 id="_13-3-5-stig-validation" tabindex="-1"><a class="header-anchor" href="#_13-3-5-stig-validation"><span>13.3.5 STIG Validation</span></a></h3><p>Once the full draft is submitted, DISA will validate the contents of the STIG Check and Fix instructions by implementing them against a test system (the author team, if they work for the vendor of a not-yet-released product, may need to work to ensure that DISA can access a test system).</p><h3 id="_13-3-6-review-and-approval" tabindex="-1"><a class="header-anchor" href="#_13-3-6-review-and-approval"><span>13.3.6 Review and Approval</span></a></h3><p>At this point, DISA personnel write up a formal reports to the DISA Authorizing Offical and confirm one last time that the STIG conforms to the style guide. Content that passes this final review is now officially a STIG and can be published to the <a href="https://public.cyber.mil" target="_blank" rel="noopener noreferrer">DOD Cyber Exchange</a>.</p><hr class="footnotes-sep">',15)),t("section",m,[t("ol",f,[t("li",u,[t("p",null,[e[4]||(e[4]=o("See ")),s(a,{to:"/resources/"},{default:r(()=>e[3]||(e[3]=[o("Resources")])),_:1}),e[5]||(e[5]=o(" for each topic in this section. ")),e[6]||(e[6]=t("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1)),e[7]||(e[7]=o()),e[8]||(e[8]=t("a",{href:"#footnote-ref1:1",class:"footnote-backref"},"↩︎",-1))])])])])])}const I=i(d,[["render",g]]),w=JSON.parse(`{"path":"/courses/guidance/13.html","title":"13. Publishing a STIG","lang":"en-US","frontmatter":{"order":13,"next":"14.md","title":"13. Publishing a STIG","author":"Will Dower","headerDepth":3,"toc":{"levels":[2,5]},"description":"13.1 Notes on Formally Publishing a STIG The STIG ProcessThe STIG Process Most of this section is informed by DISA's own published guidance for the Vendor STIG Process, as well ...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"13. Publishing a STIG\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-02T03:46:43.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Will Dower\\"}]}"],["meta",{"property":"og:url","content":"https://mitre.github.io/saf-training/saf-training/courses/guidance/13.html"}],["meta",{"property":"og:site_name","content":"MITRE SAF Training"}],["meta",{"property":"og:title","content":"13. Publishing a STIG"}],["meta",{"property":"og:description","content":"13.1 Notes on Formally Publishing a STIG The STIG ProcessThe STIG Process Most of this section is informed by DISA's own published guidance for the Vendor STIG Process, as well ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-02T03:46:43.000Z"}],["meta",{"property":"article:author","content":"Will Dower"}],["meta",{"property":"article:modified_time","content":"2024-12-02T03:46:43.000Z"}]]},"git":{"createdTime":1675452592000,"updatedTime":1733111203000,"contributors":[{"name":"Emily Rodriguez","username":"","email":"ecrodriguez@mm279976-pc.lan","commits":8},{"name":"wdower","username":"wdower","email":"57142072+wdower@users.noreply.github.com","commits":3,"url":"https://github.com/wdower"},{"name":"em-c-rod","username":"em-c-rod","email":"32680215+em-c-rod@users.noreply.github.com","commits":3,"url":"https://github.com/em-c-rod"},{"name":"Aaron Lippold","username":"","email":"lippold@gmail.com","commits":2}]},"readingTime":{"minutes":2.45,"words":735},"filePathRelative":"courses/guidance/13.md","autoDesc":true}`);export{I as comp,w as data};
