<!DOCTYPE html>
<!-- saved from url=(0018)http://jquery.com/ -->
<html class="js"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		
		<title>jQuery: The Write Less, Do More, JavaScript Library</title>
		<link rel="stylesheet" href="./jquery_files/reset.css" type="text/css">
		<link rel="stylesheet" href="./jquery_files/screen.css" type="text/css">
		<script src="./jquery_files/jquery.min.js"></script>
		<script>!window.jQuery && document.write('<script src="http://code.jquery.com/jquery-1.4.2.min.js"><\/script>');</script>
		<script src="./jquery_files/custom.js"></script>
		<link rel="alternate" type="application/rss+xml" title="jQuery Blog" href="http://jquery.com/blog/feed/">
		<link rel="shortcut icon" href="http://static.jquery.com/favicon.ico" type="image/x-icon">
	<script type="text/javascript" async="" src="./jquery_files/ga.js"></script><meta name="chromesniffer" id="chromesniffer_meta" content="{&quot;Google Analytics&quot;:-1,&quot;jQuery&quot;:&quot;1.4.2&quot;}"><script type="text/javascript" src="chrome-extension://homgcnaoacgigpkkljjjekpignblkeae/detector.js"></script></head>
	<body class="jq-enhanced">
	<div id="jq-siteContain">
			<div id="jq-header">
				<a id="jq-siteLogo" href="./jquery_files/jquery.js" title="jQuery Home"><img src="./jquery_files/logo_jquery_215x53.gif" width="215" height="53" alt="jQuery: Write Less, Do More."></a>

				<div id="jq-primaryNavigation">
					<ul>
						<li class="jq-jquery jq-current"><a href="./jquery_files/jquery.js" title="jQuery Home">jQuery</a></li>
						<li class="jq-ui"><a href="http://jqueryui.com/" title="jQuery UI">UI</a></li>
						<li class="jq-mobile"><a href="http://jquerymobile.com/" title="jQuery Mobile">Mobile</a></li>
						<li class="jq-plugins"><a href="http://plugins.jquery.com/" title="jQuery Plugins">Plugins</a></li>
						<li class="jq-meetup"><a href="http://meetups.jquery.com/" title="jQuery Meetups">Meetups</a></li>
						<li class="jq-forum"><a href="http://forum.jquery.com/" title="jQuery Forum">Forum</a></li>
						<li class="jq-blog"><a href="http://blog.jquery.com/" title="jQuery Blog">Blog</a></li>
						<li class="jq-about"><a href="http://jquery.org/about" title="About jQuery">About</a></li>
						<li class="jq-donate"><a href="http://jquery.org/donate" title="Donate to jQuery">Donate</a></li>
					</ul>
				</div><!-- /#primaryNavigation -->

				<div id="jq-secondaryNavigation">
					<ul>
						<li class="jq-download jq-first"><a href="http://docs.jquery.com/Downloading_jQuery"><span class="jq-shadow">Download</span><span>Download</span></a></li>

						<li class="jq-documentation"><a href="http://docs.jquery.com/"><span class="jq-shadow">Documentation</span><span>Documentation</span></a></li>
						<li class="jq-tutorials"><a href="http://docs.jquery.com/Tutorials"><span class="jq-shadow">Tutorials</span><span>Tutorials</span></a></li>
						<li class="jq-bugTracker"><a href="http://bugs.jquery.com/"><span class="jq-shadow">Bug Tracker</span><span>Bug Tracker</span></a></li>
						<li class="jq-discussion jq-last"><a href="http://docs.jquery.com/Discussion"><span class="jq-shadow">Discussion</span><span>Discussion</span></a></li>
					</ul>
				</div><!-- /#secondaryNavigation -->



			</div><!-- /#header -->

			<div id="jq-content" class="jq-clearfix">

				<div id="jq-intro" class="jq-clearfix">
					<h2><span class="jq-jquery"><span>jQuery</span></span> is a new kind of JavaScript Library.</h2>
					<p>jQuery is a fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development. <strong>jQuery is designed to change the way that you write JavaScript.</strong></p>
					<ul class="jq-checkpoints jq-clearfix">
						<li><a href="http://docs.jquery.com/Tutorials" title="Lightweight Footprint" class="jq-thickbox">Lightweight Footprint</a>
							<div class="jq-checkpointSubhead">

								<p>About 31KB in size <em>(Minified and Gzipped)</em></p>
							</div>
						</li>
						<li><a href="http://docs.jquery.com/Tutorials" title="CSS3 Compliant" class="jq-thickbox">CSS3 Compliant</a>
							<div class="jq-checkpointSubhead">
								<p>Supports CSS 1-3 selectors and more!</p>
							</div>

						</li>
						<li><a href="http://docs.jquery.com/Tutorials" title="Cross-browser" class="jq-thickbox">Cross-browser</a>
							<div class="jq-checkpointSubhead">
								<p>IE 6.0+, FF 3.6+, Safari 5.0+, Opera, Chrome</p>
							</div>
						</li>
					</ul>
				</div><!-- /#intro -->

				<div id="jq-download">
					<h2>Grab the latest version!</h2>
					<form action="" method="get">
						<fieldset>
							<legend>Choose your compression level:</legend>
							<div id="jq-compression" class="jq-clearfix">
								<input type="radio" name="name" value="http://code.jquery.com/jquery-1.7.2.min.js" id="jq-production" checked="checked">
								<a class="jq-radioToggle name jq-checked" href="http://code.jquery.com/jquery-1.7.2.min.js">jquery-1.7.2.min.js</a>
								<label for="jq-production">Production <em>(<strong>32KB</strong>, Minified and Gzipped)</em></label>
								<input type="radio" name="name" value="http://code.jquery.com/jquery-1.7.2.js" id="jq-development">
								<a class="jq-radioToggle name" href="http://code.jquery.com/jquery-1.7.2.js">jquery-1.7.2.js</a>
								<label for="jq-development">Development <em>(<strong>247KB</strong>, Uncompressed Code)</em></label>
							</div>
							<button type="submit" name="downloadBtn" id="jq-downloadBtn"><span>Download</span></button>
							<p class="jq-version"><strong>Current Release:</strong> v1.7.2</p>
						</fieldset>
					</form>
					<script>
					jQuery("#jq-download form").submit(function(){
						window.location = jQuery(this).find("input:checked").val();
						return false;
					});
					</script>
				</div><!-- /#download -->

				<div id="jq-whosUsing">
					<h2 class="jq-whosUsing">Who's using jQuery?</h2>
					<ul class="jq-whosUsing">
						<li><a href="http://www.google.com/" class="jq-google" title="Google">Google</a></li>
						<li><a href="http://www.dell.com/" class="jq-dell" title="Dell">Dell</a></li>
						<li><a href="http://www.bankofamerica.com/" class="jq-boa" title="Bank of America">Bank of America</a></li>
						<li><a href="http://www.mlb.com/" class="jq-mlb" title="Major League Baseball">Major League Baseball</a></li>
						<li><a href="http://www.digg.com/" class="jq-digg" title="Digg">Digg</a></li>
						<li><a href="http://www.nbc.com/" class="jq-nbc" title="NBC">NBC</a></li>
						<li><a href="http://www.cbs.com/" class="jq-cbs" title="CBS News">CBS News</a></li>
						<li><a href="http://www.netflix.com/" class="jq-netflix" title="Netflix">Netflix</a></li>
						<li><a href="http://www.technorati.com/" class="jq-technorati" title="Technorati">Technorati</a></li>
						<li><a href="http://www.mozilla.org/" class="jq-mozilla" title="Mozilla">Mozilla</a></li>
						<li><a href="http://www.wordpress.org/" class="jq-wordpress" title="Wordpress">Wordpress</a></li>
						<li><a href="http://www.drupal.org/" class="jq-drupal" title="Drupal">Drupal</a></li>
					</ul>
        </div><!-- /#jq-whosUsing -->


				<div id="jq-learnjQuery" class="jq-clearfix">

					<div id="jq-learnNow">
						<h2>Learn <span class="jq-jquery"><span>jQuery</span></span> Now!</h2>
						<p>What does jQuery code look like? Here's the quick and dirty:</p>
						<div class="jq-codeDemo jq-clearfix">
							<pre><code>$("p.neat").addClass("ohmy").show("slow");</code></pre>
							<a href="http://docs.jquery.com/Tutorials" class="jq-runCode">Run Code</a>

							<p class="neat"><strong>Congratulations!</strong> You just ran a snippet of jQuery code. Wasn't that easy? There's lots of example code throughout the <strong><a href="http://docs.jquery.com/">documentation</a></strong> on this site. Be sure to give all the code a test run to see what happens.</p>
						</div>
					</div><!-- /#learnNow -->



						<div id="jq-resources" class="clearfix">
					<h2>jQuery Resources</h2>

					<div class="jq-gettingStarted">
						<h3>Getting Started With jQuery</h3>
						<ul>
							<li><a href="http://docs.jquery.com/How_jQuery_Works">How jQuery Works</a></li>
							<li><a href="http://docs.jquery.com/Tutorials">Tutorials</a></li>
							<li><a href="http://docs.jquery.com/Using_jQuery_with_Other_Libraries">Using jQuery with other libraries</a></li>
							<li><a href="http://docs.jquery.com/">jQuery Documentation</a></li>

						</ul>
					</div>
					<div class="jq-devResources">
						<h3>Developer Resources</h3>
						<ul>
							<li><a href="http://docs.jquery.com/Discussion">Mailing List</a></li>
							<li><a href="http://docs.jquery.com/Downloading_jQuery">Source code / Git</a></li>

							<li><a href="http://docs.jquery.com/Plugins/Authoring">Plugin Authoring</a></li>
							<li><a href="http://dev.jquery.com/newticket/">Submit a New Bug Report</a></li>
						</ul>
					</div>
					</div><!-- /#resources -->

				</div><!-- /#learnjQuery -->

				<div id="jq-books" style="width:auto; float: none">
					<h2>Books About jQuery</h2>

					<ul>
					  <li class="jq-clearfix" style="width:270px;float:left;clear:none;">
							<a href="http://link.packtpub.com/S3Fr9Q" class="jq-bookImg"><img src="./jquery_files/ljq3rded.jpg" alt="Learning jQuery Third Edition" width="55" height="70"></a>
							<h3><a href="http://link.packtpub.com/S3Fr9Q">Learning jQuery Third Edition</a></h3>
							<div class="jq-author">Karl Swedberg and <br>Jonathan Chaffer</div>
							<a href="http://link.packtpub.com/S3Fr9Q" class="jq-buyNow">Buy Now</a>
						</li>
  					<li class="jq-clearfix" style="width:270px;float:left;clear:none;">
  							<a href="http://www.packtpub.com/jquery-1-4-animation-techniques-beginners-guide/book/mid/1803111nkj15" class="jq-bookImg"><img src="./jquery_files/jquery-animation-beginners-guide.jpg" alt="jQuery 1.4 Animation Techniques: Beginners Guide" width="55" height="70"></a>
  							<h3><a href="http://www.packtpub.com/jquery-1-4-animation-techniques-beginners-guide/book/mid/1803111nkj15">jQuery 1.4 Animation Techniques: Beginners Guide</a></h3>
  							<div class="jq-author">Dan Wellman</div>
  							<a href="http://www.packtpub.com/jquery-1-4-animation-techniques-beginners-guide/book/mid/1803111nkj15" class="jq-buyNow">Buy Now</a>
  						</li>
					  <li class="jq-clearfix" style="width:270px;float:left;clear:none;">
  							<a href="http://www.packtpub.com/jquery-plugin-development-beginners-guide/book/mid/1911104odmdz" class="jq-bookImg"><img src="./jquery_files/jquery-plugin-developers-guide_thumb.jpg" alt="jQuery Plugin Development Beginner&#39;s Guide" width="55" height="70"></a>
  							<h3><a href="http://www.packtpub.com/jquery-plugin-development-beginners-guide/book/mid/1911104odmdz">jQuery Plugin Development Beginner's Guide</a></h3>
  							<div class="jq-author">Guilio Bai</div>
  							<a href="http://www.packtpub.com/jquery-plugin-development-beginners-guide/book/mid/1911104odmdz" class="jq-buyNow">Buy Now</a>
  						</li>

						<li class="jq-clearfix" style="width:270px;float:left;clear:left;">
							<a href="http://www.manning.com/affiliate/idevaffiliate.php?id=648_176" class="jq-bookImg"><img src="./jquery_files/jquery-in-action-2ed_thumb.jpg" alt="jQuery in Action" width="55" height="70"></a>
							<h3><a href="http://www.manning.com/affiliate/idevaffiliate.php?id=648_176">jQuery in Action</a></h3>
							<div class="jq-author">Bear Bibeault
							  <br>and Yehuda Katz</div>
							<a href="http://www.manning.com/affiliate/idevaffiliate.php?id=648_176" class="jq-buyNow">Buy Now</a>
						</li>
						<li class="jq-clearfix" style="width:270px;float:left;clear:none;">
						  <a class="jq-bookImg" href="http://jqueryenlightenment.com/"><img src="./jquery_files/jquery-enlightenment_thumb.jpg" alt="jQuery Enlightenment" width="55" height="70"></a>
							<h3><a href="http://jqueryenlightenment.com/">jQuery Enlightenment</a></h3>
							<div class="jq-author">Cody Lindley</div>
							<a href="http://jqueryenlightenment.com/" class="jq-buyNow">Buy Now</a>
						</li>
					</ul>

				</div><!-- /#news -->



			</div><!-- /#content -->


			<div id="jq-footer" class="jq-clearfix">

				<div id="jq-credits">
					<p id="jq-copyright">© 2012 <a href="http://jquery.org/">The jQuery Foundation</a></p>
					<p id="jq-hosting">Sponsored by <a href="http://mediatemple.net/" class="jq-mediaTemple">Media Temple</a> and <a href="http://jquery.org/sponsors">others</a>.</p>
				</div>

				<div id="jq-footerNavigation">
					<ul>
						<li class="jq-download jq-first"><a href="http://docs.jquery.com/Downloading_jQuery"><span class="jq-shadow">Download</span><span>Download</span></a></li>
						<li class="jq-documentation"><a href="http://docs.jquery.com/"><span class="jq-shadow">Documentation</span><span>Documentation</span></a></li>

						<li class="jq-tutorials"><a href="http://docs.jquery.com/Tutorials"><span class="jq-shadow">Tutorials</span><span>Tutorials</span></a></li>
						<li class="jq-bugTracker"><a href="http://dev.jquery.com/"><span class="jq-shadow">Bug Tracker</span><span>Bug Tracker</span></a></li>
						<li class="jq-discussion jq-last"><a href="http://docs.jquery.com/Discussion"><span class="jq-shadow">Discussion</span><span>Discussion</span></a></li>
					</ul>
				</div><!-- /#secondaryNavigation -->

			</div><!-- /#footer -->
	</div><!-- /#siteContain -->
	<script src="./jquery_files/donate.js" type="text/javascript"></script>
	<script type="text/javascript">
	var _gaq = _gaq || []; _gaq.push(['_setAccount', 'UA-1076265-1']); _gaq.push(['_trackPageview']); _gaq.push(['_setDomainName', '.jquery.com']);
	(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);})();
	</script>
	

</body></html>