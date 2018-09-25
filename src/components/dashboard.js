import React, { Component } from "react";

import TabNav from './tabNav';
import NewsletterGrid from "./newsletter/newsletterGrid";

class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tabs: [
                {
                    title: 'Newsletter',
                    active: true,
                    component: <NewsletterGrid history={this.props.history}/>
                },
                {
                    title: 'Requests',
                    active: false,
                    component: <h4>Hey There - Requests</h4>
                }
            ]
        }
    }

    handleTabChange = (title) => {
        const tabs = this.state.tabs;

        tabs.map(tab => {
            if(tab.title == title) {
                tab.active = true;
            } else {
                tab.active = false;
            }
        })

        this.setState({ tabs });
    }

  render() {
    return (
        <div className="dashboard">
            <TabNav tabs={this.state.tabs} handleTabChange={(title) => this.handleTabChange(title)}/>
        </div>
    )
  }
}

export default Dashboard;
