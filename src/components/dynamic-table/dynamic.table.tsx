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

}

export default DynamicTable;