import './index.css';

function TabsBar(props){
    const {
        tabs
    } = props;
    return(
        <div className='TabsBar'>
            {tabs.map((tab)=>{
                return(
                    <Tab
                        key={tab.title}
                        title={tab.title}
                        a={'#'}
                    />
                )
            })}
        </div>
    )
}

export default TabsBar

function Tab(props){
    const {
        title,
        a
    } = props;

    return (
        <div className={`TabsBar-Tabs TabsBar-Tabs_inactive`}>
            {title}
        </div>
    )
}

TabsBar.defaultProps = {
    tabs: [
        {
            title: 'Articles',
        },
        {
            title: 'Products',
        },
        {
            title: 'Drafts',
        },
        {
            title: 'Collections',
        }
    ]
}