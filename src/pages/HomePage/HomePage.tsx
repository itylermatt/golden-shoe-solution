import React, {useState, Fragment} from 'react';
import Tabs from "../../components/Tabs/Tabs";
import SnackBar from "../../components/SnackBar/SnackBar";
import './HomePage.css';
import Accordion from '../../components/Accordion/Accordion';
import Content from '../../components/Content/Content';
import Card from '../../components/Card/Card';

export default function HomePage(props: any){
    const [tabs] = useState<Array<string>>(['men', 'women', 'kids']);

    return (
        <Fragment>
            <Tabs tabs={tabs}/>
            <SnackBar/>
            <div className={'root'}>
                <div className={'subRoot'}>
                    <div className={'leftAccordion'}>
                        <Accordion />
                    </div>
                    <div className={'rightContent'}>
                        <Content />
                    </div>
                </div>
                <div className={'subRoot1'}>
                    <div className={'card'}><Card /></div>
                    <div className={'card'}><Card /></div>
                    <div className={'card'}><Card /></div>
                </div>
                <div className={'footer'}>
                    <div>Contact Us</div>
                </div>
            </div>
        </Fragment>
    );
}