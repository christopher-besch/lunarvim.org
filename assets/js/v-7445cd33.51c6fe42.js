"use strict";(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[2368],{9123:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-7445cd33",path:"/dev/",title:"Development of Lunarvim",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Getting started",slug:"getting-started",children:[]},{level:2,title:"Lua + Neovim = ❤️",slug:"lua-neovim",children:[]},{level:2,title:"Official Documentation",slug:"official-documentation",children:[]},{level:2,title:"Neovim Documentation",slug:"neovim-documentation",children:[]},{level:2,title:"Style Guide",slug:"style-guide",children:[]},{level:2,title:"Code Quality",slug:"code-quality",children:[]}],filePathRelative:"dev/README.md",git:{updatedTime:1636199576e3,contributors:[{name:"christianchiarulli",email:"chrisatmachine@gmail.com",commits:2},{name:"Adam Stocks",email:"adam@adamstocks.com",commits:1},{name:"Luc Sinet",email:"Tastyep@users.noreply.github.com",commits:1},{name:"eleijonmarck",email:"eric.leijonmarck@gmail.com",commits:1},{name:"kylo252",email:"59826753+kylo252@users.noreply.github.com",commits:1}]}}},7498:(e,n,a)=>{a.r(n),a.d(n,{default:()=>se});var s=a(6252);const l=(0,s.uE)('<h1 id="development-of-lunarvim" tabindex="-1"><a class="header-anchor" href="#development-of-lunarvim" aria-hidden="true">#</a> Development of Lunarvim</h1><h2 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting started</h2><p>We recommend setting up a symlink to your fork:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.local/share/lunarvim/\n<span class="token function">ln</span> -s ~/dev/Lunarvim ~/.local/share/lunarvim/lvim_dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Your output should be something like:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">ls</span> -a\nlrwxrwxrwx  <span class="token number">1</span> user user   <span class="token number">37</span> sep <span class="token number">23</span> <span class="token number">14</span>:35 lvim_dev -<span class="token operator">&gt;</span> /home/user/dev/LunarVim\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><hr><p>Now switch your lvim to the development setup:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.local/share/lunarvim/\n<span class="token function">mv</span> lvim lvim_back\n<span class="token function">mv</span> lvim_dev lvim\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><hr><p>Going back to lvim</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ~/.local/share/lunarvim/\n<span class="token function">mv</span> lvim lvim_dev\n<span class="token function">mv</span> lvim_back lvim\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>To test that you can get some output from <code>lvim</code> add the following to your <code>init.lua</code> file in your fork.</p><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code><span class="token function">print</span> <span class="token punctuation">(</span><span class="token string">&quot;it works&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>lvim\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>Now type <code>:messages</code>. Happy contributing!</p><h2 id="lua-neovim" tabindex="-1"><a class="header-anchor" href="#lua-neovim" aria-hidden="true">#</a> Lua + Neovim = ❤️</h2>',17),t=(0,s.Uk)("To get started, "),r={href:"https://github.com/nanotee/nvim-lua-guide",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("this guide"),o=(0,s.Uk)(" covers many points that will get you going with Lua and how Neovim works."),u=(0,s._)("h2",{id:"official-documentation",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#official-documentation","aria-hidden":"true"},"#"),(0,s.Uk)(" Official Documentation")],-1),c=(0,s.Uk)("The "),m={href:"https://www.lua.org/manual/5.4/",target:"_blank",rel:"noopener noreferrer"},d=(0,s.Uk)("reference manual"),p=(0,s.Uk)(" is the official definition of the Lua language."),h=(0,s.Uk)("If you don't know about it, "),k={href:"https://devdocs.io/lua~5.4/",target:"_blank",rel:"noopener noreferrer"},v=(0,s.Uk)("DevDocs"),b=(0,s.Uk)(" combines multiple API documentations in a fast, organized, and searchable interface."),g=(0,s._)("h2",{id:"neovim-documentation",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#neovim-documentation","aria-hidden":"true"},"#"),(0,s.Uk)(" Neovim Documentation")],-1),f=(0,s.Uk)("Neovim provides a "),_={href:"https://neovim.io/doc/user/lua.html",target:"_blank",rel:"noopener noreferrer"},y=(0,s.Uk)("standard library"),U=(0,s.Uk)(" which you should know about."),w=(0,s._)("p",null,[(0,s.Uk)("It provides many functions that you wish were implemented in Lua's stdlib, for instance "),(0,s._)("code",null,"strings.split"),(0,s.Uk)(".")],-1),L=(0,s.Uk)("It also comes with a "),x={href:"https://neovim.io/doc/user/lsp.html",target:"_blank",rel:"noopener noreferrer"},W=(0,s.Uk)("LSP framework"),S=(0,s.Uk)(" and "),D={href:"https://neovim.io/doc/user/",target:"_blank",rel:"noopener noreferrer"},N=(0,s.Uk)("much more"),A=(0,s.Uk)("."),q=(0,s._)("h2",{id:"style-guide",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#style-guide","aria-hidden":"true"},"#"),(0,s.Uk)(" Style Guide")],-1),I=(0,s.Uk)("LuaRock "),T={href:"https://github.com/luarocks/lua-style-guide",target:"_blank",rel:"noopener noreferrer"},C=(0,s.Uk)("style guide"),G=(0,s.Uk)(" is a complete work that deserves a look if you want learn how to write consistent and robust code."),O=(0,s._)("p",null,"It is based on many pre-existing guides, provides rationals for all their decisions, and worked successfully in a long-running project.",-1),V=(0,s._)("h2",{id:"code-quality",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#code-quality","aria-hidden":"true"},"#"),(0,s.Uk)(" Code Quality")],-1),j=(0,s.Uk)("To ensure code quality and a consistent style, our "),E={href:"https://github.com/Lunarvim/LunarVim/actions",target:"_blank",rel:"noopener noreferrer"},P=(0,s.Uk)("CI"),R=(0,s.Uk)(" uses the following tools:"),z=(0,s.Uk)("Lua: "),H={href:"https://github.com/JohnnyMorganz/StyLua",target:"_blank",rel:"noopener noreferrer"},M=(0,s.Uk)("Stylua"),Q=(0,s.Uk)(". An opinionated Lua code formatter."),Y={href:"https://github.com/mpeterv/luacheck",target:"_blank",rel:"noopener noreferrer"},Z=(0,s.Uk)("Luacheck"),J=(0,s.Uk)(". A tool for linting and static analysis of Lua code."),$=(0,s.Uk)("Shell "),B={href:"https://github.com/mvdan/sh",target:"_blank",rel:"noopener noreferrer"},F=(0,s.Uk)("Shfmt"),K=(0,s.Uk)(". A shell parser, formatter, and interpreter with bash support."),X={href:"https://github.com/koalaman/shellcheck",target:"_blank",rel:"noopener noreferrer"},ee=(0,s.Uk)("Shellcheck"),ne=(0,s.Uk)(". A static analysis tool for shell scripts."),ae={},se=(0,a(3744).Z)(ae,[["render",function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,(0,s._)("p",null,[t,(0,s._)("a",r,[i,(0,s.Wm)(a)]),o]),u,(0,s._)("p",null,[c,(0,s._)("a",m,[d,(0,s.Wm)(a)]),p]),(0,s._)("p",null,[h,(0,s._)("a",k,[v,(0,s.Wm)(a)]),b]),g,(0,s._)("p",null,[f,(0,s._)("a",_,[y,(0,s.Wm)(a)]),U]),w,(0,s._)("p",null,[L,(0,s._)("a",x,[W,(0,s.Wm)(a)]),S,(0,s._)("a",D,[N,(0,s.Wm)(a)]),A]),q,(0,s._)("p",null,[I,(0,s._)("a",T,[C,(0,s.Wm)(a)]),G]),O,V,(0,s._)("p",null,[j,(0,s._)("a",E,[P,(0,s.Wm)(a)]),R]),(0,s._)("ul",null,[(0,s._)("li",null,[z,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",H,[M,(0,s.Wm)(a)]),Q]),(0,s._)("li",null,[(0,s._)("a",Y,[Z,(0,s.Wm)(a)]),J])])]),(0,s._)("li",null,[$,(0,s._)("ul",null,[(0,s._)("li",null,[(0,s._)("a",B,[F,(0,s.Wm)(a)]),K]),(0,s._)("li",null,[(0,s._)("a",X,[ee,(0,s.Wm)(a)]),ne])])])])],64)}]])},3744:(e,n)=>{n.Z=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}}}]);