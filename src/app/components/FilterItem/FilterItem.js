import React from "react"

import styles from './FilterItem.module.css'

const FilterItem = ({ item, onChangeFilter, selected = false }) => {
   return <div className={selected ? styles.FilterItemSelected : styles.FilterItem} onClick={() => onChangeFilter(item)}>
      {item.name}
   </div>
}

export default FilterItem