import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a,o as t}from"./app-CuB3TegB.js";const n="/saf-training/assets/Delta_Files_1-B-vm2Kfd.png",r="/saf-training/assets/use_case_1-1-LFl2sBOD.gif",o="/saf-training/assets/use_case_1-2-BnN2uPkL.gif",l="/saf-training/assets/use_case_1-3-TT-7zEjK.png",d="/saf-training/assets/use_case_2_1-TXf7CBsp.png",p="/saf-training/assets/use_case_2-2-B-gjF4l8.png",h="/saf-training/assets/use_case_2-3-BVSvAIfp.png",c="/saf-training/assets/use_case_2-4-Bq8mCWE_.png",g="/saf-training/assets/use_case_2-5-Cr7uCKn-.png",u="/saf-training/assets/use_case_3-1-CYsYHja9.png",f="/saf-training/assets/use_case_3-2-Gc4G8Np7.png",m={};function k(y,e){return t(),i("div",null,e[0]||(e[0]=[a('<h2 id="_4-1-use-cases-for-running-delta" tabindex="-1"><a class="header-anchor" href="#_4-1-use-cases-for-running-delta"><span>4.1 Use Cases for Running Delta</span></a></h2><p>There are several situations that warrant the use of the delta process. These are broken down into the following use cases:</p><ol><li><p><a href="#411-use-case-1">Use Case 1</a> - Check and update control IDs and metadata based on new guidance (run update controls)</p></li><li><p><a href="#415-use-case-2">Use Case 2</a> - Generate stubs for new controls found in the XCCDF Benchmark file (run Delta without fuzzy matching)</p></li><li><p><a href="#414-use-case-3">Use Case 3</a> - No mappings were found using update controls (run Delta with fuzzy matching)</p></li></ol><h3 id="_4-1-1-use-case-1" tabindex="-1"><a class="header-anchor" href="#_4-1-1-use-case-1"><span>4.1.1 Use Case 1</span></a></h3><p>Updated guidances sometimes modifies the control identification (ID) values of a given control. To make these modifications from baseline X to baseline Y, use the update controls process with the provided XCCDF STIG guidance file. The process checks if the new guidance changes the control numbers and updates the internal metadata if necessary (testing code is retained).</p><p>Suppose we want to update our <a href="https://github.com/mitre/microsoft-windows-server-2019-stig-baseline/" target="_blank" rel="noopener noreferrer">Windows Server 2019 inspec profile repository</a> from <a href="https://github.com/mitre/microsoft-windows-server-2019-stig-baseline/releases/tag/1.3.0" target="_blank" rel="noopener noreferrer">version 1 release 3</a> to version 3 release 2.</p><h4 id="step-1-collect-necessary-files" tabindex="-1"><a class="header-anchor" href="#step-1-collect-necessary-files"><span>Step 1: Collect necessary files:</span></a></h4><ol><li>Download or clone the Windows Server 2019 profile repository to your system.</li><li>Download the <a href="https://public.cyber.mil/stigs/downloads/" target="_blank" rel="noopener noreferrer">latest STIG</a> place the XCCDF XML file into your working directory.</li></ol><figure><img src="'+n+'" alt="File directory containing an inspec profile and an XCCDF XML file" tabindex="0" loading="lazy"><figcaption>File directory containing an inspec profile and an XCCDF XML file</figcaption></figure><h4 id="step-2-generate-a-profile-summary" tabindex="-1"><a class="header-anchor" href="#step-2-generate-a-profile-summary"><span>Step 2: Generate a profile summary</span></a></h4><p>Use the <code>inspec json</code> command to generate a profile summary of the inspec profile<br><img src="'+r+`" alt="Generate Profile Summary JSON" loading="lazy"></p><h4 id="step-3-run-update-controls" tabindex="-1"><a class="header-anchor" href="#step-3-run-update-controls"><span>Step 3: Run Update Controls</span></a></h4><p>Use the <code>update_controls4delta</code> method using the profile summary file, the STIG guidance file, and the controls directory for the inspec profile as inputs.</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">saf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> generate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update_controls4delta</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-X </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./windows-server-2019-v3r2-xccdf.xml</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-J </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./profile.json</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-c </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./microsoft-windows-server-2019-stig-baseline/controls</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="Running the Update Controls command" tabindex="0" loading="lazy"><figcaption>Running the Update Controls command</figcaption></figure><p>The output should look like this:</p><figure><img src="'+l+'" alt="Update Controls Output" tabindex="0" loading="lazy"><figcaption>Update Controls Output</figcaption></figure><p>From these results we can gather that:</p><ol><li>Thirty-one (31) controls were skipped, because they are not present in the STIG guidance. This indicates that these controls were deleted in the recent revision.</li><li>Two-hundred-seventy-two (272) controls have had their control IDs updated. Any metadata changes have also been made to the controls as well.</li><li>Zero (0) controls were found to have the correct identification. This indicated that the STIG guidance renamed all mapped controls.</li><li>One (1) new control was found in the STIG guidance. It is important to note that <code>update_controls4delta</code> does not generate this control for you.</li></ol><p><strong>Process:</strong> Run <code>update_controls4delta</code></p><p><a href="#41-use-cases-for-running-delta">return to top</a></p><h3 id="_4-1-4-use-case-2" tabindex="-1"><a class="header-anchor" href="#_4-1-4-use-case-2"><span>4.1.4 Use Case 2</span></a></h3><p>New guidance often contains new controls that weren&#39;t previously defined. In this case, running the delta process generates the control stubs with all metadata, except for the describe block (code) content.</p><p>Suppose we want to update our <a href="https://github.com/mitre/redhat-enterprise-linux-8-stig-baseline" target="_blank" rel="noopener noreferrer">RedHat Enterprise Linux 8 STIG Baseline</a> from <a href="https://github.com/mitre/redhat-enterprise-linux-8-stig-baseline/releases/tag/v1.14.1" target="_blank" rel="noopener noreferrer">Version 1 Release 14</a> to version 2 release 1.</p><h4 id="step-1-collect-necessary-files-1" tabindex="-1"><a class="header-anchor" href="#step-1-collect-necessary-files-1"><span>Step 1: Collect necessary files</span></a></h4><figure><img src="'+d+`" alt="File directory containing an inspec profile, and XCCDF XML file, and a generated profile summary JSON" tabindex="0" loading="lazy"><figcaption>File directory containing an inspec profile, and XCCDF XML file, and a generated profile summary JSON</figcaption></figure><p>This include the profile summary JSON file generated used <code>cinc-auditor json redhat-enterprise-linux-8-stig-baseline &gt; profile.json</code></p><h4 id="optional-run-update-controls4delta" tabindex="-1"><a class="header-anchor" href="#optional-run-update-controls4delta"><span><strong>OPTIONAL</strong>: Run update_controls4delta</span></a></h4><p>Running the update controls command on this profile can give us information on what needs to be updated:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">saf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> generate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> update_controls4delta</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-X </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">rhel_8_xccdf.xml</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-J </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">profile.json</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-c </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./redhat-enterprise-linux-8-stig-baseline/controls</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="update_controls4delta output" tabindex="0" loading="lazy"><figcaption>update_controls4delta output</figcaption></figure><p>From this we can gather:</p><ol><li>No existing controls needed to be renamed in the new STIG guidance (366 controls with correct identification, 0 processed files).</li><li>Nine (9) controls were removed in the updated STIG guidance (9 skipped files).</li><li>One (1) new control was found in the updated STIG guidance.</li></ol><p>From this output, we know that the Delta command needs to be run, because Delta is able to generate files for new controls and make any changes needed to the other controls.</p><h4 id="step-2-run-delta" tabindex="-1"><a class="header-anchor" href="#step-2-run-delta"><span>Step 2: Run Delta</span></a></h4><p>Use the <code>delta</code> command to perform a delta on the profile and the STIG guidance file:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">saf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> generate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> delta</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-X </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./rhel_8_V2R1_xccdf.xml</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-J </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./profile.json</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-r </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./report.md</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -o</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./redhat-8-updated/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In this case, we will be outputting a report file to <code>report.md</code> and the updated inspec profile to the <code>./redhat-8-updated/</code> directory.</p><p>You should receive the following output:<br><img src="`+h+'" alt="Delta command output" loading="lazy"></p><p>The <code>[&quot;+&quot;,&quot;SV-268322&quot;]</code> indicates that a new control was created with the ID SV-258322.</p><p>After running the command, you should see the following:</p><figure><img src="'+c+'" alt="Generated files and folders from delta" tabindex="0" loading="lazy"><figcaption>Generated files and folders from delta</figcaption></figure><ol><li><p><code>redhat-8-updated</code> directory: A folder container the updated inspec profile.</p><figure><img src="'+g+'" alt="Updated profile output directory" tabindex="0" loading="lazy"><figcaption>Updated profile output directory</figcaption></figure><p>a. A <code>controls</code> directory containing all of the updated and new controls in the STIG guidance file. This does NOT contain removed controls so no further modifications need to be done.<br> b. A delta.json file containing a JSON formatted summary of the delta process.</p></li><li><p><code>report.md</code>: Markdown report containin formatted version of delta.json summary results.</p></li><li><p><code>saf-cli.log</code> a log of the SAF CLI output from running the command</p></li></ol><p><strong>Process:</strong> Run <code>delta</code></p><p><a href="#41-use-cases-for-running-delta">return to top</a></p><h3 id="_4-1-5-use-case-3" tabindex="-1"><a class="header-anchor" href="#_4-1-5-use-case-3"><span>4.1.5 Use Case 3</span></a></h3><p>Running update controls may result in no controls being updated or no mappings being found from baseline X to baseline Y. This could be due to the baselines belonging to different platforms, or too many revisions were released between the two baselines, creating no way to map between them. In this case, use Delta with fuzzy matching.</p><p>In this use case, we will be mapping the Windows Server 2019 STIG profile using the Windows Server 2022 STIG guidance in order to determine how much of our old profile we can use for this new profile. The controls between these two profiles share no similarities, and there are no legacy tags in which we can correlate them together. To find out how much of our old profile we can use, do the following:</p><h4 id="step-1-collect-necessary-files-2" tabindex="-1"><a class="header-anchor" href="#step-1-collect-necessary-files-2"><span>Step 1: Collect necessary files</span></a></h4><figure><img src="'+u+`" alt="File directory containing an inspec profile, and XCCDF XML file, and a generated profile summary JSON" tabindex="0" loading="lazy"><figcaption>File directory containing an inspec profile, and XCCDF XML file, and a generated profile summary JSON</figcaption></figure><h4 id="step-2-run-the-delta-command-with-fuzzy-matching" tabindex="-1"><a class="header-anchor" href="#step-2-run-the-delta-command-with-fuzzy-matching"><span>Step 2: Run the delta command with fuzzy matching</span></a></h4><p>To enable fuzzy matching, use the <code>-M</code> flag and specify the controls directory using the <code>-c</code> flag:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">saf</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> generate</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> delta</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-X </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./windows-server-2022-v2r2-xccdf.xml</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-J </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./profile.json</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -r</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./report.md</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-o </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">./windows-server-2022-stig-baseline</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-M </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-c</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> ./microsoft-windows-server-2019-stig-baseline/controls</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The output is long, but what&#39;s important is the results and statistics section:<br><img src="`+f+'" alt="Delta fuzzy matching command output" loading="lazy"></p><p>We can observe that:</p><ol><li>Delta found 266 total matches and mapped these matched controls over into the new profile.</li><li>Delta was unable to find matches for 6 of the controls in the Windows Server 2022 STIG guidance (No Match Controls).</li></ol><p>Of the 273 controls specified by the Windows Server 2022 STIG guidance, delta found mappings for 266 of them. This means that about 97% of the Windows Server 2019 profile was able to be used for the Windows Server 2022 profile.</p><p>Similar to use case 2, there should be the same generated files:</p><ol><li><code>windows-server-2022-stig-baseline</code> directory containing a <code>controls</code> directory with the mapped controls and updated metadata and a <code>delta.json</code> file containing a summarized report of the delta process.</li><li><code>report.md</code></li><li><code>saf-cli.log</code></li></ol><p><strong>Process:</strong> Run <code>delta</code></p><p><a href="#41-use-cases-for-running-delta">return to top</a></p>',61)]))}const v=s(m,[["render",k]]),C=JSON.parse('{"path":"/courses/delta/04.html","title":"4. Delta Use Cases","lang":"en-US","frontmatter":{"order":4,"next":"05.md","title":"4. Delta Use Cases","author":"Daniel Medina, George Dias","description":"4.1 Use Cases for Running Delta There are several situations that warrant the use of the delta process. These are broken down into the following use cases: Use Case 1 - Check an...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4. Delta Use Cases\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-13T21:59:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Daniel Medina, George Dias\\"}]}"],["meta",{"property":"og:url","content":"https://mitre.github.io/saf-training/saf-training/courses/delta/04.html"}],["meta",{"property":"og:site_name","content":"MITRE SAF Training"}],["meta",{"property":"og:title","content":"4. Delta Use Cases"}],["meta",{"property":"og:description","content":"4.1 Use Cases for Running Delta There are several situations that warrant the use of the delta process. These are broken down into the following use cases: Use Case 1 - Check an..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-13T21:59:31.000Z"}],["meta",{"property":"article:author","content":"Daniel Medina, George Dias"}],["meta",{"property":"article:modified_time","content":"2024-12-13T21:59:31.000Z"}]]},"git":{"createdTime":1704493101000,"updatedTime":1734127171000,"contributors":[{"name":"Aaron Lippold","username":"","email":"lippold@gmail.com","commits":5},{"name":"George M. Dias","username":"","email":"gdias@mitre.org","commits":1},{"name":"Daniel Medina","username":"","email":"dmedina@mitre.org","commits":13},{"name":"George M Dias","username":"","email":"GDIAS@MITRE.ORG","commits":4}]},"readingTime":{"minutes":4.25,"words":1274},"filePathRelative":"courses/delta/04.md","autoDesc":true}');export{v as comp,C as data};
