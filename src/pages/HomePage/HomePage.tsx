import React, {useState, Fragment, useEffect} from 'react';
import Tabs from "../../components/Tabs/Tabs";
import SnackBar from "../../components/SnackBar/SnackBar";
import './HomePage.css';
import Accordion from '../../components/Accordion/Accordion';
import Content from '../../components/Content/Content';
import Card from '../../components/Card/Card';
import axios, {AxiosResponse} from 'axios';

export default function HomePage(props: any) {
    const [tabs] = useState<Array<string>>(['men', 'women', 'kids']);
    const [shoeSales, setShoeSales] = useState<any>([]);
    const [categories, setCategories] = useState<any>([]);
    const [categoryItems, setCategoryItems] = useState<any>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/').then((response: AxiosResponse<any>) => {
            console.log('response came back as : ', response);
            setShoeSales(response.data.titleData);
            setCategories(response.data.categories);
            setCategoryItems(response.data.categoryItems);
        }).catch(e => console.log(e));
    }, []);

    return (
        <Fragment>
            <Tabs tabs={tabs}/>
            <SnackBar/>
            <div className={'root'}>
                <div className={'subRoot'}>
                    <div className={'leftAccordion'}>
                        {
                            categories.map((category, index) => {
                                const tempItems: Array<any> = [];
                                categoryItems.forEach(item => category===item.type? tempItems.push(item): null);
                                return (
                                    <Accordion category={category} subCategories={tempItems} key={index}/>
                                )
                            })
                        }
                    </div>
                    <div className={'rightContent'}>
                        <Content shoeSales={shoeSales}/>
                    </div>
                </div>
                <div className={'subRoot1'}>
                    {
                        shoeSales.map((shoe, index) => <Card shoeSale={shoe} key={index}/>)
                    }
                </div>
                <div className={'footer'}>
                    <div>Contact Us</div>
                </div>
            </div>
        </Fragment>
    );
}
