import Card from "Components/Card"
import Sidebar from "Components/Sidebar"

export default function BadRoute(params) {
    return(

        <Card face={'bottom'}
            content={
                <div>
                    <h1>Page not found :(</h1>
                    </div>
            }
        >
            
            <Sidebar path={'/home'} title={'Home'} direction={'left'}/>
        </Card>
    )
};
