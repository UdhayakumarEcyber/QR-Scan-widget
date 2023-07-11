import * as React from "react";
import { registerWidget, registerLink, registerUI, IContextProvider, } from './uxp';
import { TitleBar, FilterPanel, WidgetWrapper } from "uxp/components";
import './styles.scss';

interface IWidgetProps {
    uxpContext?: IContextProvider,
    instanceId?: string
}

const QrScan_widgetsWidget: React.FunctionComponent<IWidgetProps> = (props:any) => {
    return (
        <WidgetWrapper>
            {/* <TitleBar title='QrScan_widgets' />  */}

            <div className="model">

                <div className="model-lft">
                    <h3> 
                        The Circuit <em>Scan to book</em>  
                    
                    </h3> 
                </div> 

                <div className="model-rgt">
                    <div className="model-rgt-content">
                        <canvas id="canvas" className="qr-code"></canvas> 
                        <div className="scan_txt-box">
                            <div className="logo"></div>
                            <p>Scan with Lucy Mobile</p>
                        </div> 
                     </div>
                </div>  

            </div>


  </WidgetWrapper>
    )
};

/**
 * Register as a Widget
 */
registerWidget({
    id: "qrScan_widgets",
    widget: QrScan_widgetsWidget,
    configs: {
        layout: {
            w: 14,
            h: 12,
            minH: 10,
            minW: 12,
            maxH: 13,
            maxW: 15
        }
    }
});

/**
 * Register as a Sidebar Link
 */
/*
registerLink({
    id: "qrScan_widgets",
    label: "QrScan_widgets",
    // click: () => alert("Hello"),
    component: QrScan_widgetsWidget
});
*/

/**
 * Register as a UI
 */

 /*
registerUI({
    id:"qrScan_widgets",
    component: QrScan_widgetsWidget
});
*/