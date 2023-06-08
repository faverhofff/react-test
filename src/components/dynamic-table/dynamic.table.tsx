import React, { Component } from 'react';
import DataTable from './interfaces/data.table';
import DynamicTableProps from './interfaces/dynamic.table.props';

class DynamicTable extends Component<DynamicTableProps, DataTable> {
  constructor(props: DynamicTableProps) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(this.props.url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
  }

  render() {
    const { data } = this.state;

    return (
        <div id="json-table">
            {data.map((item) => (
                <div key={item.brand_id}>
                    <div>
                        <img src="{item.logo}" alt="{item.logo}" />
                    </div>
                    <div>
                        {item.info.rating}
                    </div>
                    <div>
                        <div>{item.info.features[0]}</div>
                        <div>{item.info.features[1]}</div>
                        <div>{item.info.features[2]}</div>
                    </div>
                    <div>
                        <div>
                            <button>Play Now</button>
                        </div>
                        <div>
                            <a href="#">T&C Apply</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      );
  }
}

export default DynamicTable;