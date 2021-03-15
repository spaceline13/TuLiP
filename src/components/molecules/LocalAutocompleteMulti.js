import React, {useEffect, useState} from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MuiDownshift from 'mui-downshift';
import Text from '../atoms/Text';
import Box from "@material-ui/core/Box";
import RestrictedLengthChip from "../atoms/RestrictedLengthChip";

const LocalAutocompleteMulti = ({ items, variant, selected, onSelect, placeholder, primaryItemOpt, secondaryItemOpt, formatNumbers, hasHierarchy, onChipClick, customTooltip, uppercaseLabel, debug  }) => {
	const [inputValue, setInputValue] = useState('');
	const [filteredItems, setFilteredItems] = useState(items);
	const [selectedItems, setSelectedItems] = useState(selected ? (Array.isArray(selected) ? selected : [selected]) : []);

	const handleChange = (item, downshiftProps) => {
		const tmpSelected = [...selectedItems, item];
		setSelectedItems(tmpSelected);
		if (onSelect) onSelect(tmpSelected);
		downshiftProps.openMenu();
		setInputValue('');
		setFilteredItems(items);
	};

	const handleInputChange = event => {
		const { value } = event.target;
		const filtered = items.filter(item => primaryItemOpt ? item[primaryItemOpt].toLowerCase().includes(value.toLowerCase()) : item.toLowerCase().includes(value.toLowerCase()));
		setFilteredItems(filtered);
		setInputValue(value);
	};

	const handleDelete = item => {
		const tmpSelected = selectedItems.filter(it => primaryItemOpt ? (it[primaryItemOpt] !== item[primaryItemOpt]) : (it !== item));
		setSelectedItems(tmpSelected);
		if (onSelect) onSelect(tmpSelected);
	};

	const inputProps = () => ({
		onChange: handleInputChange,
		startAdornment: (
			selectedItems.map(item => (
				<RestrictedLengthChip
					key={primaryItemOpt ? item[primaryItemOpt] : item}
					label={primaryItemOpt ? item[primaryItemOpt] : item}
					customTooltip={customTooltip}
					onClick={() => { onChipClick(item) }}
					onDelete={() => handleDelete(item)}
					uppercaseLabel={uppercaseLabel}
				/>
			))
		),
		endAdornment: null,
		label: placeholder,
		style: { flexWrap: 'wrap' }
	});

	const getListItem = ({ getItemProps, item }) => (
		item ? (
			<ListItem button {...getItemProps()} disabled={selectedItems.includes(item)}>
				{hasHierarchy ? (
					<Text capitalize={!!uppercaseLabel} inline>{item.parents && item.parents.map(parent => <span>{parent} > </span>)} <b>{item[primaryItemOpt]}</b>&nbsp;{secondaryItemOpt && <Text inline color={'grey'}>({formatNumbers ? formatNumbers(item[secondaryItemOpt]) : item[secondaryItemOpt]})</Text>}</Text>
				) : (
					<Box>
						<Text capitalize={!!uppercaseLabel} inline>{primaryItemOpt ? item[primaryItemOpt] : item}</Text>&nbsp;{secondaryItemOpt && <Text inline color={'grey'}>({formatNumbers ? formatNumbers(item[secondaryItemOpt]) : item[secondaryItemOpt]})</Text>}
					</Box>
				)}
			</ListItem>
		) : (
			<ListItem button disabled>
				<ListItemText primary={<span style={{ fontStyle: 'italic' }}>No items found</span>} />
			</ListItem>
		)
	);

	useEffect(() => {
		setFilteredItems(items)
	}, [items])

	return (
		<MuiDownshift
			getInputProps={inputProps}
			getListItem={getListItem}
			itemToString={item => (item ? item[primaryItemOpt] : '')}
			inputValue={inputValue}
			items={filteredItems}
			showEmpty={true}
			onChange={handleChange}
			variant={variant ? variant : 'standard'}
		/>
	);
};

export default LocalAutocompleteMulti;
