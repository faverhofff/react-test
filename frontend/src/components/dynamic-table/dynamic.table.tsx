import { Component } from 'react';
import { DataSet, DataSetStruct } from './interfaces/data.table';
import DynamicTableProps from './interfaces/dynamic.table.props';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dynamic.table.css';
import RatinScale from '../rating/rating.scale';

class DynamicTable extends Component<DynamicTableProps, {data: DataSetStruct}> {
  constructor(props: DynamicTableProps) {
    super(props);
    this.state = {
        data: {}
    };
  }

  /**
   * 
   */
  componentDidMount() {
    this.fetchData();
  }



  /**
   * 
   */
  fetchData() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((json: DataSetStruct) => {
        this.setState({ data: json });
      })
  }

  /**
   * 
   * @returns 
   */
  render() {
    const data = this.state.data as any;

    return (
        <div id="json-table">
            
            {/* TODO: Get all keys from group */}
            {Object.keys(data).map((key: string) => (

                // TODO: Get list from key group
                data[key].map((item: DataSet) => (
                    <div className={'row box-item align-items-center'} key={item.brand_id}>
                        <div className={'col-lg-4 text-center'}>
                            <img src={item.logo} alt={item.logo} />
                        </div>

                        <div className={'col-lg-3 text-center'}>
                            <RatinScale maxRating={5} rating={item.info.rating} index={parseInt(item.brand_id)} />
                        </div>

                        <div className={'col-lg-3'}>
                            <ul>
                                <li>{item.info.features[0]}</li>
                                <li>{item.info.features[1]}</li>
                                <li>{item.info.features[2]}</li>
                            </ul>
                        </div>
                        
                        <div className={'col-lg-2 text-center'}>
                            <div className={'h-50'}>
                                <button type="button" className={'btn btn-success'}>Play Now</button>
                            </div>
                            <div className={'h-50'}>
                                <a href="#">T&C Apply</a>
                            </div>
                        </div>
                    </div>
                ))
                // end: Get list from key group

            ))}
            {/* end: Get all keys from group */}
            
            <div className='row load-more'>
                <div className="col-lg-12 text-center">
                <button type="button" className={'btn btn-success font-bold'}>Load More</button>
                </div>
            </div>
        </div>
      );
  }
}

export default DynamicTable;