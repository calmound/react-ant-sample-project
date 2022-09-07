import { Card, Carousel, Drawer, Space } from "antd"
import { useState } from "react";


const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const Content = () => {
    const [visible, setVisible] = useState(false)
    const handleClickCard = () => {
        setVisible(true)
    }
    return <div>
        <Carousel >
            <div>
                <h3 style={contentStyle}>内容1</h3>
            </div>
            <div>
                <h3 style={contentStyle}>内容2</h3>
            </div>
            <div>
                <h3 style={contentStyle}>内容3</h3>
            </div>
            <div>
                <h3 style={contentStyle}>内容4</h3>
            </div>
        </Carousel>
        <Space wrap>
            {Array(10).fill(null).map(item => {
                return <Card title="Default size card" extra={<a onClick={handleClickCard} href="#">More</a>} style={{ width: 300}}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            })}
        </Space>
        <Drawer title="Basic Drawer" placement="right" onClose={() => {
            setVisible(false)
        }} open={visible}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    </div>
}

export default Content