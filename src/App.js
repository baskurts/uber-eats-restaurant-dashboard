import { Card, Descriptions, Divider, List, Button} from 'antd'; 
import dishes from '../src/assets/data/dishes.json'
import DescriptionsItem from 'antd/lib/descriptions/Item';

function App() {
  return (
    <Card title={'Order Title'} style={{ margin: 20 }}>
      <Descriptions bordered column={{lg: 1, md: 1, sm: 1}}>
        <Descriptions.Item label="Customer">
          Kuzey Tekinson
        </Descriptions.Item>
        <Descriptions.Item label="Customer Address">
          Beyoglu Caddesi, Istanbul, Turkiye
        </Descriptions.Item>
      </Descriptions>
      <Divider />
      <List
        dataSource={dishes}
        renderItem={(dishItem) => (
          <List.Item>
            <div style={{fontWeight: 'bold'}}>{dishItem.name} x{dishItem.quantity}</div>
            <div>${dishItem.price}</div>
          </List.Item>
        )}
      />
      <Divider />
      <div style={styles.totalSumContainer}>
        <h2>Total: </h2>
        <h2 style={styles.totalPrice}>$42.96</h2>
      </div>
      <Divider />
      <div style={styles.buttonsContainer}>
        <Button>
          Decline Order
        </Button>
        <Button>
          Accept Order
        </Button>
      </div>
    </Card>
  );
}

const styles = {
  totalSumContainer: {
    flexDirection: 'row',
    display: 'flex',
  },
  totalPrice: {
    marginLeft: 'auto',
    fontWeight: 'bold'
  },
  buttonsContainer: {

  }
};

export default App;
