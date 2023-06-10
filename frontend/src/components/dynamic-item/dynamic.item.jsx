import { DataSet } from '../dynamic-table/interfaces/data.table';
import RatinScale from '../rating/rating.scale';
import DynamicItemProps from './interfaces/dynamic.item.props';
import './dynamic.item.css';

 /**
  * 
  * @param {*} param0 
  * @returns 
  */
 const DynamicItem = ({ data }: DynamicItemProps) => {

  /**
   * 
   * @param {*} link 
   * @returns 
   */
  const handleButtonClick = (link: String) => {
    return () => window.open(link, '_blank');
  }

  /**
    * 
    * @param {*} str 
    * @returns 
    */
  const prepareTermConditionString = (str: String) => str.split('|')[1];

  return (
    <div>
      {/* TODO: Get all keys from group */}
      {data.map((item: DataSet) => (
        <div className={'row box-item align-items-center'} key={item.brand_id}>
          <div className={'col-lg-4 text-center'}>
            <img src={item.logo} alt={item.logo} />
          </div>

          <div className={'col-lg-3 text-center'}>
            <RatinScale maxRating={5} rating={item.info.rating} />
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
              <button className={'btn btn-success'} onClick={handleButtonClick(item.play_url)}>Play Now</button>
            </div>
            <div className={'h-50'} dangerouslySetInnerHTML={{ __html: prepareTermConditionString(item.terms_and_conditions) }}>
            </div>
          </div>
        </div>
      ))}
      {/* end: Get all keys from group */}
    </div>
  );
};


export default DynamicItem;