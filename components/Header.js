export default function Header() {
  if (Math.random() < 0.5){
    return <div className="title_header"><h1 className="title">I make</h1><h1 className="title_big">minecraft mods</h1></div>
  }
  return <div className="title_header"><h1 className="title_big">I make</h1><h1 className="title">minecraft mods</h1></div>
}
