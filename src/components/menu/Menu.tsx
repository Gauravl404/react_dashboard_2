import { Link } from "react-router-dom"
import "./menu.scss"
import {menu} from "../../data"

const Menu = () => {
  
type Item = {
  id : number,
  title : string,
  listItems : ItemList[]
}

type ItemList = {
  id: number,
  title: string,
  url: string,
  icon: string
}

  return (
    <div className="menu">
      {menu.map((item:Item)=>(
      <div className="item" key={item.id}>
        <span className="title">{item.title}</span>
        {item.listItems.map(listItem=>(
            <Link to={listItem.url} className="listItem" key={listItem.id}>
            <img src={listItem.icon} alt="" />
            <span className="listItemTitle">{listItem.title}</span>
            </Link>
        ))}
      </div>
      ))}
    </div>
  )
}

export default Menu