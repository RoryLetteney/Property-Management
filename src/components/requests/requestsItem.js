import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

class RequestsItem extends Component {
    render() {
        return (
            <div className="requests-item">
                <Icon className="requests-item__icon" icon="fas fa-exclamation-triangle"/>
                <div className="requests-item__title">
                    My door fell down
                </div>
                <div className="requests-item__tenant-unit">
                    Rory - Unit 115
                </div>
                <Icon className="requests-item__arrow" icon="fas fa-sort-down"/>
                <div className="requests-item__date">
                    01/31/1990
                </div>
                <Button className="requests-item__move" callback={() => console.log('clicked')} icon="fas fa-wrench"/>
                <div className="requests-item__description">
                    <img src='http://via.placeholder.com/160x94' className="requests-item__description__img"/>
                    <p className="requests-item__description__text">
                        Donec cursus dictum neque vitae aliquam. Donec ultrices justo non lacinia placerat. Phasellus posuere sed odio vel mollis. Nulla vitae massa sit amet elit vehicula aliquam sit amet non orci. Donec libero est, accumsan ac ultricies quis, mollis eget leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit sit amet enim sit amet faucibus. Phasellus convallis ultricies odio, in fermentum libero lacinia at. Phasellus placerat elit in nibh feugiat, sit amet euismod est commodo. Ut nisl ante, maximus et nisl ac, auctor efficitur magna. Duis justo risus, tempor eget varius a, iaculis eu arcu. Curabitur ac arcu augue. Sed purus ipsum, pellentesque sed neque eget, malesuada aliquam turpis.
                    </p>
                </div>
            </div>
        )
    }
}

export default RequestsItem;