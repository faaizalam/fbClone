import { Block, Chat, Event, Group, Pages, People, Settings } from '@material-ui/icons';


export const Myfun=(x)=>{
    switch (x) {
        case "Chat":
        return <Chat/>
        case "Event":
        return <Event/>
        case "Settings":
        return <Settings/>
        case "People":
        return <People/>
        case "Block":
        return <Block/>
        case "Group":
        return <Group/>
        case "Pages":
        return <Pages/>

       
    
    }

}