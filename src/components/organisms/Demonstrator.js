import React from "react";
import NiceButton from '../atoms/NiceButton'
import RestrictedLengthChip from '../atoms/RestrictedLengthChip'
import Text from "../atoms/Text";
import LocalAutocomplete from "../molecules/LocalAutocomplete";
import LocalAutocompleteMulti from "../molecules/LocalAutocompleteMulti";
import RemoteAutocomplete from "../molecules/RemoteAutocomplete";
import VirtualizedTable from "../molecules/VirtualizedTable";
import Paginator from "../molecules/Paginator";
import Box from "@material-ui/core/Box";

const Demonstrator = () => {
    const data = [];
    for (let i = 0; i <= 2000; i += 1) {
        data.push({
            description: `Test ${i}!`,
            counter: i,
            lastActivity: "1/1/2018",
            createdAt: "1/1/2016"
        });
    }
    const columns = [
        {
            width: 200,
            flexGrow: 1.0,
            label: "Description",
            dataKey: "description"
        },
        {
            width: 90,
            label: "Counter",
            dataKey: "counter",
            numeric: true
        },
        {
            width: 120,
            flexGrow: 0.5,
            label: "Last Activity",
            dataKey: "lastActivity"
        },
        {
            width: 120,
            flexGrow: 0.5,
            label: "Created",
            dataKey: "createdAt"
        }
    ]

    return (
        <Box>
            <NiceButton>Nice Button</NiceButton>
            <RestrictedLengthChip
                label={'restricted'}
                customTooltip={'my tooltip'}
                onClick={() => { alert('clicked')}}
                onDelete={() => {alert('on delete')}}
                uppercaseLabel={true}
            />
            <Text>Text</Text>
            <LocalAutocomplete
                key={'standard-products'}
                selectedItem={null}
                onSelect={(item)=>{alert(item)}}
                items={[{key: 'item1', value: '1'}, {key: 'item2', value: '2'}]}
                primaryItemOpt={'key'}
                placeholder={<span><i className='fab fa-lg fa-list' /> my list</span>}
                uppercaseLabel
            />
            <LocalAutocompleteMulti
                key={'standard-products'}
                selectedItem={null}
                onSelect={(item)=>{alert(item)}}
                items={[{key: 'item1', value: '1'}, {key: 'item2', value: '2'}]}
                primaryItemOpt={'key'}
                placeholder={<span><i className='fab fa-lg fa-list' /> my list</span>}
                uppercaseLabel
            />
            {/*
            <RemoteAutocomplete
                onSelect={()=>{}}
                asyncFetchFunction={asyncSearchForSuppliers}
                placeholder={'Type and select a supplier to enable the ADD SUPPLIER button'}
                reference={downshiftReference}
                hasAddNew
                customListHandler={customListHandler}
            />
            */}
            <Box>
                <Paginator currentPage={1} handlePageClick={()=>{}} totalPages={12} extraProps={{ containerClassName: 'pagination blue' }} />
            </Box>
            <VirtualizedTable
                rowCount={data.length}
                columns={columns}
                rowGetter={({ index }) => data[index]}
            />
        </Box>
    )
}

export default Demonstrator