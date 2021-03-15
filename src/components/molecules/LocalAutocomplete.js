import ListItem from '@material-ui/core/ListItem';
import MuiDownshift from 'mui-downshift';
import React, {useEffect, useState} from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import Text from '../atoms/Text';
import Box from "@material-ui/core/Box";

const LocalAutocomplete = ({ items, selectedItem, onSelect, disabled, placeholder, reference, primaryItemOpt, secondaryItemOpt, formatNumbers, uppercaseLabel, loading = false, hasHierarchy, variant, forceRefreshOnChange }) => {
    const [filtered, setFiltered] = useState(items)
    let input = null
    const handleStateChange = changes => {
        if (typeof changes.inputValue === 'string') {
            const filteredItems = items.filter(item => item[primaryItemOpt].toLowerCase().includes(changes.inputValue.toLowerCase()));
            setFiltered(filteredItems);
        }
    }
    const selectedItemProps = {
        defaultSelectedItem: selectedItem
    }
    if (forceRefreshOnChange) selectedItemProps.selectedItem = selectedItem

    useEffect(() => {
        setFiltered(items)
    }, [items])

    return (
        <MuiDownshift
            focusOnClear
            {...selectedItemProps}
            getListItem={
                ({ getItemProps, item }) => (
                    item ? (
                        <ListItem button {...getItemProps(item)}>
                            {hasHierarchy ? (
                                <Text capitalize={!!uppercaseLabel} inline>{item.parents.map(parent => <span>{parent} > </span>)} <b>{item[primaryItemOpt]}</b>&nbsp;{secondaryItemOpt && <Text inline color={'grey'}>({formatNumbers ? formatNumbers(item[secondaryItemOpt]) : item[secondaryItemOpt]})</Text>}</Text>
                            ) : (
                                <Box>
                                    <Text capitalize={!!uppercaseLabel} inline>{item[primaryItemOpt]}</Text>&nbsp;{secondaryItemOpt && <Text inline color={'grey'}>({formatNumbers ? formatNumbers(item[secondaryItemOpt]) : item[secondaryItemOpt]})</Text>}
                                </Box>
                            )}
                        </ListItem>
                    ) : (
                        <ListItem button disabled>
                            <ListItemText primary={<span style={{ fontStyle: 'italic' }}>No items found</span>} />
                        </ListItem>
                    )
                )
            }
            inputRef={a => { input = a; }}
            itemToString={item => (item ? item[primaryItemOpt] : '')}
            ref={reference}
            items={filtered}
            showEmpty={true}
            onChange={value => {
                if (input) input.blur();
                onSelect(value);
            }}
            getInputProps={() => ({
                label: placeholder,
                disabled: disabled,
                classes: { input: uppercaseLabel ? 'capitalize' : ''}
            })}
            onStateChange={handleStateChange}
            loading={loading}
            variant={variant}
        />
    );
};

export default LocalAutocomplete;
