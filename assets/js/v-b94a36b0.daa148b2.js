"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[995],{9813:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a={key:"v-b94a36b0",path:"/plugins/02-default-plugins.html",title:"Default Plugins",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Plugin management",slug:"plugin-management",children:[]},{level:2,title:"Language Server Protocol",slug:"language-server-protocol",children:[]},{level:2,title:"Language parser",slug:"language-parser",children:[]},{level:2,title:"Comments",slug:"comments",children:[]},{level:2,title:"File explorer",slug:"file-explorer",children:[]},{level:2,title:"Project management",slug:"project-management",children:[]},{level:2,title:"Fuzzy file finder",slug:"fuzzy-file-finder",children:[]},{level:2,title:"Completion",slug:"completion",children:[]},{level:2,title:"Snippets",slug:"snippets",children:[]},{level:2,title:"Auto-Pair closing brackets",slug:"auto-pair-closing-brackets",children:[]},{level:2,title:"Git",slug:"git",children:[]},{level:2,title:"Keybindings",slug:"keybindings",children:[]},{level:2,title:"Icons",slug:"icons",children:[]},{level:2,title:"Status and Bufferline",slug:"status-and-bufferline",children:[]},{level:2,title:"Terminal",slug:"terminal",children:[]},{level:2,title:"Dashboard",slug:"dashboard",children:[]},{level:2,title:"Debugging",slug:"debugging",children:[]}],filePathRelative:"plugins/02-default-plugins.md",git:{updatedTime:1637308522e3,contributors:[{name:"rebuilt",email:"memoryman51@hotmail.com",commits:6},{name:"Landon Schropp",email:"schroppl@gmail.com",commits:2},{name:"Piotr Hałasiewicz",email:"piotr.halasiewicz@scout24.com",commits:1},{name:"Tran Phuc",email:"glupstar312@gmail.com",commits:1},{name:"kylo252",email:"59826753+kylo252@users.noreply.github.com",commits:1},{name:"milesnzl",email:"miles@debian",commits:1}]}}},6813:(e,t,n)=>{n.r(t),n.d(t,{default:()=>st});var a=n(6252);const r=(0,a._)("h1",{id:"default-plugins",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#default-plugins","aria-hidden":"true"},"#"),(0,a.Uk)(" Default Plugins")],-1),l=(0,a._)("p",null,"This page lists the default plugins installed Lunavim including descriptions, important commands and default keybindings. This page only lists minimal information for each plugin. Go to the project page for each plugin to read the full documentation.",-1),o=(0,a._)("h2",{id:"plugin-management",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#plugin-management","aria-hidden":"true"},"#"),(0,a.Uk)(" Plugin management")],-1),i={href:"https://github.com/wbthomason/packer.nvim",target:"_blank",rel:"noopener noreferrer"},s=(0,a.Uk)("packer.nvim"),d=(0,a.Uk)(": Plugin/package management for Neovim."),u=(0,a.uE)('<table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>:PackerInstall</code></td><td>Installs packages that have a lvim.plugins entry in ~/.config/lvim/config.lua</td></tr><tr><td><code>:PackerStatus</code></td><td>Lists the installed plugins</td></tr><tr><td><code>:PackerUpdate</code></td><td>Fetches and installs updates to packages</td></tr><tr><td><code>:PackerClean</code></td><td>Removes any disabled or no longer managed plugins</td></tr><tr><td><code>:PackerCompile</code></td><td>Compile lazy-loader code and save to path</td></tr><tr><td><code>:PackerSync</code></td><td>Performs <code>:PackerUpdate</code> and <code>:PackerCompile</code></td></tr></tbody></table><h2 id="language-server-protocol" tabindex="-1"><a class="header-anchor" href="#language-server-protocol" aria-hidden="true">#</a> Language Server Protocol</h2>',2),c={href:"https://github.com/neovim/nvim-lspconfig",target:"_blank",rel:"noopener noreferrer"},p=(0,a.Uk)("nvim.lspconfig"),g=(0,a.Uk)(": A collection of common configurations for Neovim's built-in language server client."),m=(0,a._)("p",null,"Automatically launch and initialize language servers",-1),h=(0,a._)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Command"),(0,a._)("th",null,"Description")])]),(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",null,[(0,a._)("code",null,":LspInfo")]),(0,a._)("td",null,"Language server diagnostics")])])],-1),b={href:"https://github.com/kabouzeid/nvim-lspinstall",target:"_blank",rel:"noopener noreferrer"},f=(0,a.Uk)("nvim-lspinstall"),k=(0,a.Uk)(": Companion plugin for nvim-lspconfig to install language servers"),_=(0,a._)("p",null,"Use tab completion with LspInstall to check for available language servers",-1),v=(0,a._)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Command"),(0,a._)("th",null,"Description")])]),(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",null,[(0,a._)("code",null,":LspInstall <language>")]),(0,a._)("td",null,"Installs a language server for the given language")])])],-1),y={href:"https://github.com/tamago324/nlsp-settings.nvim",target:"_blank",rel:"noopener noreferrer"},U=(0,a.Uk)("nlsp.settings.nvim"),w=(0,a.Uk)(": A plugin to configure Neovim LSP using json files like coc-settings.json."),x=(0,a._)("table",null,[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Command"),(0,a._)("th",null,"Description")])]),(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("td",null,[(0,a._)("code",null,":NlspConfig <NAME_OF_LANGUAGE_SERVER>")]),(0,a._)("td",null,"Creates a configuration file for your language server")])])],-1),L=(0,a.Uk)("See "),P=(0,a.Uk)("Language Server Configuration"),C=(0,a._)("h2",{id:"language-parser",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#language-parser","aria-hidden":"true"},"#"),(0,a.Uk)(" Language parser")],-1),D={href:"https://github.com/nvim-treesitter/nvim-treesitter",target:"_blank",rel:"noopener noreferrer"},W=(0,a.Uk)("nvim-treesitter"),S=(0,a.Uk)(": Easy way to use the tree-sitter interface in Neovim to parse languages"),z=(0,a.uE)("<p>Provides basic syntax features like syntax highlighting and code folding. Allows other plugins to use the parsed syntax tree for other purposes, e.g. nvim-autopairs, nvim-comment, etc</p><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>:TSInstall &lt;language_to_install&gt;</code></td><td>Tab to show available languages</td></tr><tr><td><code>:TSInstallInfo</code></td><td>Check installation status</td></tr></tbody></table>",2),A=(0,a.Uk)("Consult the nvim.treesitter documentation to see which languages are "),E={href:"https://github.com/nvim-treesitter/nvim-treesitter#supported-languages",target:"_blank",rel:"noopener noreferrer"},I=(0,a.Uk)("supported"),T=(0,a._)("h2",{id:"comments",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#comments","aria-hidden":"true"},"#"),(0,a.Uk)(" Comments")],-1),j={href:"https://github.com/terrortylor/nvim-comment",target:"_blank",rel:"noopener noreferrer"},N=(0,a.Uk)("nvim-comment"),G=(0,a.Uk)(": Toggle comments in Neovim"),F=(0,a.uE)('<table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>gcc</code></td><td>Comment line</td></tr><tr><td><code>gc{motion}</code></td><td>comment/uncomment selection defined by a motion</td></tr><tr><td><code>gcip</code></td><td>comment/uncomment a paragraph</td></tr><tr><td><code>gc4w</code></td><td>comment/uncomment current line</td></tr><tr><td><code>gc4j</code></td><td>comment/uncomment 4 lines below the current line</td></tr></tbody></table><h2 id="file-explorer" tabindex="-1"><a class="header-anchor" href="#file-explorer" aria-hidden="true">#</a> File explorer</h2>',2),V={href:"https://github.com/kyazdani42/nvim-tree.lua",target:"_blank",rel:"noopener noreferrer"},q=(0,a.Uk)("nvim-tree.lua"),O=(0,a.Uk)(" A File Explorer For Neovim Written In Lua"),R=(0,a.uE)('<table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>&lt;leader&gt; e</code></td><td>Opens explorer, &lt;spacebar&gt; is the default leader key in LunarVim</td></tr><tr><td><code>:q</code></td><td>Quit</td></tr><tr><td><code>g?</code></td><td>Toggle help and key bindings.</td></tr></tbody></table><h2 id="project-management" tabindex="-1"><a class="header-anchor" href="#project-management" aria-hidden="true">#</a> Project management</h2>',2),H={href:"https://github.com/ahmedkhalf/project.nvim",target:"_blank",rel:"noopener noreferrer"},B=(0,a.Uk)("project.nvim"),M=(0,a.Uk)(" All in one project management."),K=(0,a._)("p",null,"Finds the root of your project and changes the LunarVim working directory to the project root depending on the language, may use .git, Cargo.toml, etc",-1),Z=(0,a._)("h2",{id:"fuzzy-file-finder",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#fuzzy-file-finder","aria-hidden":"true"},"#"),(0,a.Uk)(" Fuzzy file finder")],-1),Q={href:"https://github.com/nvim-telescope/telescope.nvim",target:"_blank",rel:"noopener noreferrer"},Y=(0,a.Uk)("telescope.nvim"),J=(0,a.Uk)(": Extendable fuzzy finder over lists, built on the latest features from neovim core"),X=(0,a.uE)('<table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>&lt;leader&gt; f</code></td><td>Opens file search</td></tr><tr><td><code>&lt;spacebar&gt; f</code></td><td>If using LunarVim defaults</td></tr></tbody></table><h2 id="completion" tabindex="-1"><a class="header-anchor" href="#completion" aria-hidden="true">#</a> Completion</h2>',2),$={href:"https://github.com/hrsh7th/nvim-cmp",target:"_blank",rel:"noopener noreferrer"},ee=(0,a.Uk)("nvim-cmp"),te=(0,a.Uk)(": A completion engine plugin for neovim written in Lua."),ne=(0,a._)("h2",{id:"snippets",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#snippets","aria-hidden":"true"},"#"),(0,a.Uk)(" Snippets")],-1),ae={href:"https://github.com/L3MON4D3/LuaSnip",target:"_blank",rel:"noopener noreferrer"},re=(0,a.Uk)("LuaSnip"),le=(0,a.Uk)(": Provides a snippet engine for neovim written in Lua."),oe=(0,a.Uk)("View example configurations "),ie={href:"https://github.com/L3MON4D3/LuaSnip/blob/master/Examples/snippets.lua",target:"_blank",rel:"noopener noreferrer"},se=(0,a.Uk)("here"),de=(0,a.Uk)(" View the documentation with "),ue=(0,a._)("code",null,":help luasnip",-1),ce={href:"https://github.com/rafamadriz/friendly-snippets",target:"_blank",rel:"noopener noreferrer"},pe=(0,a.Uk)("friendly-snippets"),ge=(0,a.Uk)(": A collection of snippets for different programming languages."),me=(0,a._)("p",null,"LuaSnip uses friendly-snippets as it's snippet library.",-1),he=(0,a._)("h2",{id:"auto-pair-closing-brackets",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#auto-pair-closing-brackets","aria-hidden":"true"},"#"),(0,a.Uk)(" Auto-Pair closing brackets")],-1),be={href:"https://github.com/windwp/nvim-autopairs",target:"_blank",rel:"noopener noreferrer"},fe=(0,a.Uk)("nvim-autopairs"),ke=(0,a.Uk)(": Provides automatic closing of brackets."),_e=(0,a._)("h2",{id:"git",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),(0,a.Uk)(" Git")],-1),ve={href:"https://github.com/lewis6991/gitsigns.nvim",target:"_blank",rel:"noopener noreferrer"},ye=(0,a.Uk)("gitsigns.nvim"),Ue=(0,a.Uk)(": Provides visual indicators for which lines have changed since the last commit"),we=(0,a.uE)('<p>Adds commands for staging git hunks.</p><table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>&lt;Leader&gt;gj</code></td><td>Go to next Hunk</td></tr><tr><td><code>&lt;Leader&gt;gk</code></td><td>Go to previous Hunk</td></tr><tr><td><code>&lt;Leader&gt;gl</code></td><td>Show git blame</td></tr><tr><td><code>&lt;Leader&gt;gp</code></td><td>Preview hunk</td></tr><tr><td><code>&lt;Leader&gt;gr</code></td><td>Reset hunk</td></tr><tr><td><code>&lt;Leader&gt;gR</code></td><td>Reset buffer</td></tr><tr><td><code>&lt;Leader&gt;gs</code></td><td>Stage hunk</td></tr><tr><td><code>&lt;Leader&gt;gu</code></td><td>Unstage hunk</td></tr></tbody></table><h2 id="keybindings" tabindex="-1"><a class="header-anchor" href="#keybindings" aria-hidden="true">#</a> Keybindings</h2>',3),xe={href:"https://github.com/folke/which-key.nvim",target:"_blank",rel:"noopener noreferrer"},Le=(0,a.Uk)("which-key"),Pe=(0,a.Uk)(": Displays popup with possible key bindings."),Ce=(0,a.uE)('<p>Triggered by default with <code>Spacebar</code>. The speed whichkey opens is defined by <code>timeoutlen</code>. LunarVim defines a short <code>timeoutlen</code> of <code>100ms</code>. Some plugins might require a longer <code>timeoutlen</code> to work properly. The following command redefines the timeoutlen to half a second.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>vim<span class="token punctuation">.</span>opt<span class="token punctuation">.</span>timeoutlen <span class="token operator">=</span> <span class="token number">500</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="icons" tabindex="-1"><a class="header-anchor" href="#icons" aria-hidden="true">#</a> Icons</h2>',3),De={href:"https://github.com/kyazdani42/nvim-web-devicons",target:"_blank",rel:"noopener noreferrer"},We=(0,a.Uk)("nvim-web-devicons"),Se=(0,a.Uk)(": Provides icons for use with some plugins"),ze=(0,a._)("h2",{id:"status-and-bufferline",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#status-and-bufferline","aria-hidden":"true"},"#"),(0,a.Uk)(" Status and Bufferline")],-1),Ae={href:"https://github.com/romgrk/barbar.nvim",target:"_blank",rel:"noopener noreferrer"},Ee=(0,a.Uk)("barbar.nvim"),Ie=(0,a.Uk)(": barbar.nvim is a tabline plugin with re-orderable, auto-sizing, clickable tabs."),Te=(0,a.uE)("<table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>&lt;S-l&gt;</code></td><td>Go to next buffer</td></tr><tr><td><code>&lt;S-h&gt;</code></td><td>Go to previous buffer</td></tr></tbody></table>",1),je={href:"https://github.com/hoob3rt/lualine.nvim",target:"_blank",rel:"noopener noreferrer"},Ne=(0,a.Uk)("lualine"),Ge=(0,a.Uk)(": A blazing fast and easy to configure neovim statusline written in pure lua."),Fe=(0,a.Uk)("Go here"),Ve=(0,a.Uk)(" for more information on configuration"),qe=(0,a._)("h2",{id:"terminal",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#terminal","aria-hidden":"true"},"#"),(0,a.Uk)(" Terminal")],-1),Oe={href:"https://github.com/akinsho/toggleterm.nvim",target:"_blank",rel:"noopener noreferrer"},Re=(0,a.Uk)("toggleterm.nvim"),He=(0,a.Uk)(": A neovim plugin to persist and toggle multiple terminals during an editing session"),Be=(0,a.uE)('<table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>&lt;C-t&gt;</code></td><td>Toggle terminal</td></tr></tbody></table><p>Toggleterm can be used to launch command line programs. By default <code>gg</code> launches <code>LazyGit</code> assuming it is installed on your system. Other terminal executables can be added with:</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>    <span class="token comment">-- Add executables to config.lua</span>\n    <span class="token comment">-- { exec, keymap, name}</span>\n     lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>terminal<span class="token punctuation">.</span>execs <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">}</span> to overwrite\n     lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>terminal<span class="token punctuation">.</span>execs<span class="token punctuation">[</span><span class="token operator">#</span>lvim<span class="token punctuation">.</span>builtin<span class="token punctuation">.</span>terminal<span class="token punctuation">.</span>execs<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;gdb&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;GNU Debugger&quot;</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="dashboard" tabindex="-1"><a class="header-anchor" href="#dashboard" aria-hidden="true">#</a> Dashboard</h2>',4),Me={href:"https://github.com/glepnir/dashboard-nvim",target:"_blank",rel:"noopener noreferrer"},Ke=(0,a.Uk)("dashboard-nvim"),Ze=(0,a.Uk)(": Provides a start screen with useful options."),Qe=(0,a._)("h2",{id:"debugging",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#debugging","aria-hidden":"true"},"#"),(0,a.Uk)(" Debugging")],-1),Ye={href:"https://github.com/mfussenegger/nvim-dap",target:"_blank",rel:"noopener noreferrer"},Je=(0,a.Uk)("nvim-dap"),Xe=(0,a.Uk)(": nvim-dap is a Debug Adapter Protocol client implementation for Neovim"),$e=(0,a.uE)('<p>For more information type the following commands</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token punctuation">:</span>help dap<span class="token punctuation">.</span>txt\n<span class="token punctuation">:</span>help dap<span class="token operator">-</span>adapter\n<span class="token punctuation">:</span>help dap<span class="token operator">-</span>configuration\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',2),et=(0,a.Uk)("or go to the "),tt={href:"https://github.com/mfussenegger/nvim-dap/wiki/Debug-Adapter-installation",target:"_blank",rel:"noopener noreferrer"},nt=(0,a.Uk)("Debug-Adapter installation wiki"),at={href:"https://github.com/Pocco81/DAPInstall.nvim",target:"_blank",rel:"noopener noreferrer"},rt=(0,a.Uk)("DAPInstall"),lt=(0,a.Uk)(" Provides a way to manage installation, configuration, and setup of debuggers."),ot=(0,a.uE)("<table><thead><tr><th>Command</th><th>Description</th></tr></thead><tbody><tr><td><code>:DIInstall &lt;debugger&gt;</code></td><td>Checks dependencies and installs &lt;debugger&gt;</td></tr><tr><td><code>:DIUnistall &lt;debugger&gt;</code></td><td>Uninstalls &lt;debugger&gt;</td></tr><tr><td><code>:DIList</code></td><td>Lists installed debuggers</td></tr></tbody></table>",1),it={},st=(0,n(3744).Z)(it,[["render",function(e,t){const n=(0,a.up)("OutboundLink"),it=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,l,o,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",i,[s,(0,a.Wm)(n)]),d])]),u,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",c,[p,(0,a.Wm)(n)]),g])]),m,h,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",b,[f,(0,a.Wm)(n)]),k])]),_,v,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",y,[U,(0,a.Wm)(n)]),w])]),x,(0,a._)("p",null,[L,(0,a.Wm)(it,{to:"/plugins/02-after-install.html#language-server-configuration"},{default:(0,a.w5)((()=>[P])),_:1})]),C,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",D,[W,(0,a.Wm)(n)]),S])]),z,(0,a._)("p",null,[A,(0,a._)("a",E,[I,(0,a.Wm)(n)])]),T,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",j,[N,(0,a.Wm)(n)]),G])]),F,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",V,[q,(0,a.Wm)(n)]),O])]),R,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",H,[B,(0,a.Wm)(n)]),M])]),K,Z,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",Q,[Y,(0,a.Wm)(n)]),J])]),X,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",$,[ee,(0,a.Wm)(n)]),te])]),ne,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",ae,[re,(0,a.Wm)(n)]),le])]),(0,a._)("p",null,[oe,(0,a._)("a",ie,[se,(0,a.Wm)(n)]),de,ue]),(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",ce,[pe,(0,a.Wm)(n)]),ge])]),me,he,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",be,[fe,(0,a.Wm)(n)]),ke])]),_e,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",ve,[ye,(0,a.Wm)(n)]),Ue])]),we,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",xe,[Le,(0,a.Wm)(n)]),Pe])]),Ce,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",De,[We,(0,a.Wm)(n)]),Se])]),ze,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",Ae,[Ee,(0,a.Wm)(n)]),Ie])]),Te,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",je,[Ne,(0,a.Wm)(n)]),Ge])]),(0,a._)("p",null,[(0,a.Wm)(it,{to:"/configuration/06-statusline.html"},{default:(0,a.w5)((()=>[Fe])),_:1}),Ve]),qe,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",Oe,[Re,(0,a.Wm)(n)]),He])]),Be,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",Me,[Ke,(0,a.Wm)(n)]),Ze])]),Qe,(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",Ye,[Je,(0,a.Wm)(n)]),Xe])]),$e,(0,a._)("p",null,[et,(0,a._)("a",tt,[nt,(0,a.Wm)(n)])]),(0,a._)("p",null,[(0,a._)("strong",null,[(0,a._)("a",at,[rt,(0,a.Wm)(n)]),lt])]),ot],64)}]])},3744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,a]of t)n[e]=a;return n}}}]);