let container = document.getElementById("container")

var styles = document.createElement("link")
styles.rel = "stylesheet"
styles.type = "text/css"
styles.href = "styles.css"

document.head.appendChild(styles)

var navBar = document.createElement("div")
navBar.className = "nav-bar"
navBar.innerHTML = "<a style='font-size:50px';>HighOnCoding</a><b><a style='font-size:30px';>Home</a></b><a style='font-size:30px';>Examples</a>"

var grayBar = document.createElement("div")
grayBar.className = "grey-bar"
grayBar.innerHTML = "<h1>Curse of the current review</h1><p>When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.</p>"


var listBar = document.createElement("div")
listBar.classList = "list-bar"
listBar.innerHTML = "<div class='header'><h2>Hello WatchKit</h2></div><div><p>Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.</p></div><div class='comment-bar'><a>12 Comments</a><a>124 Likes</a></div>"

var listBar2 = document.createElement("div")
listBar2.classList = "list-bar"
listBar2.innerHTML = "<div class='header'><h2>Introduction to Swift</h2></div><div><p>Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.</p></div><div class='comment-bar'><a>15 Comments</a> <a>45 Likes</a></div>"

container.appendChild(navBar)
container.appendChild(grayBar)
container.appendChild(listBar)
container.appendChild(listBar2)