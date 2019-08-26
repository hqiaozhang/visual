import React, {Component} from 'react';
import { Table, Input, Button, Popconfirm, Form } from 'antd';

const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false,
  };

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  save = e => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error && error[e.currentTarget.id]) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

 
  renderCell = form => {
    this.form = form;
    const { children, dataIndex, record, title } = this.props;
    const { editing } = this.state;
    return editing ? (
      <Form.Item style={{ margin: 0 }}>
        {form.getFieldDecorator(dataIndex, {
          rules: [
            {
              required: true,
              message: `${title} is required.`,
            },
          ],
          initialValue: record[dataIndex],
        })(<Input ref={node => (this.input = node)} onPressEnter={this.save} onBlur={this.save} />)}
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{ paddingRight: 24 }}
        onClick={this.toggleEdit}
      >
        {children}
      </div>
    );
  };

  render() {
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      children,
      ...restProps
    } = this.props;
    return (
      <td {...restProps}>
        {editable ? (
          <EditableContext.Consumer>{this.renderCell}</EditableContext.Consumer>
        ) : (
          children
        )}
      </td>
    );
  }
}

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title:'序号',
        render:(text,record,index)=>{
			//生成序号
          return(
            <span>{(this.state.currentIndex-1)*10+(index+1)}</span>
          )
        },
      }, 
      {
        title: 'name',
        dataIndex: 'name',
        width: '30%',
        editable: true,
      },
      {
        title: 'value',
        dataIndex: 'value',
        width: '30%',
        editable: true,
      },
      {
        title: 'operation',
        dataIndex: 'operation',
        render: (text, record) =>
          this.state.dataSource.length >= 1 ? (
              <a href="javascript:;" onClick={this.handleDelete.bind(this, record.key)}>删除</a>
           
          ) : null,
      },
    ];
    
    this.state = {
      currentIndex: 1,  //初始化的下标
      dataSource: [],
      count: 0,
    };
    this.pagination={
      onChange:(page, pageSize)=>{
        this.setState({
          currentIndex:page
        })
      }
    }
  }
  componentDidMount() {
    const dataSource = this.props.sourceData.map((item, index) => Object.assign({}, {key: index}, item))
    this.setState({
      dataSource: dataSource,
      count: dataSource.length + 1
    })
  }
  
  /**
   * @description 删除
   */
  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    let timer = setTimeout(() => {
      this.props.pfn(this.state.dataSource)
      clearTimeout(timer)
    })
    // this.setState(() => {
    //   return {dataSource: dataSource.filter(item => item.key !== key)}
    // }),() => {

    //   this.props.pfn(this.state.dataSource)
    // }  
    // this.setState(({value}=>{
    //   value:value+1
    // }),()=>{
    //     console.log(this.state.value);
    // });
  }
  /**
   * @description 新增 
   */
  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      id: count,
      name: `new ${count}`,
      value: 0,
    };
 
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
    let timer = setTimeout(() => {
      this.props.pfn(this.state.dataSource)
      clearTimeout(timer)
    })
  }

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
    this.props.pfn(newData)
  }
  
  render() {
    const { dataSource } = this.state;
    if(dataSource.length == 0) {
      return ''
    }
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        <Button onClick={this.handleAdd.bind(this)} type="primary" style={{ marginBottom: 16 }}> 新增 </Button>
        <Table
      
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={this.pagination}
        />
      </div>
    );
  }
}

 