import { DataSheetGridProps, DataSheetGridRef } from '../types'
import { useState } from 'react'
import { DataSheetGrid } from './DataSheetGrid'
import React from 'react'

export const StaticDataSheetGrid = React.forwardRef(function <T>(
  {
    columns,
    gutterColumn,
    stickyRightColumn,
    addRowsComponent,
    createRow,
    duplicateRow,
    style,
    rowKey,
    onFocus,
    onBlur,
    onActiveCellChange,
    onSelectionChange,
    rowClassName,
    rowHeight,
    ...rest
  }: DataSheetGridProps<T>,
  ref: React.ForwardedRef<DataSheetGridRef<T>>
) {
  const [staticProps] = useState({
    columns,
    gutterColumn,
    stickyRightColumn,
    addRowsComponent,
    createRow,
    duplicateRow,
    style,
    rowKey,
    onFocus,
    onBlur,
    onActiveCellChange,
    onSelectionChange,
    rowClassName,
    rowHeight,
  })

  return (
    <DataSheetGrid
      {...staticProps}
      {...rest}
      rowHeight={
        typeof rowHeight === 'number' ? rowHeight : staticProps.rowHeight
      }
      ref={ref}
    />
  )
}) as <T>(
  props: DataSheetGridProps<T> & {
    ref?: React.ForwardedRef<DataSheetGridRef<T>>
  }
) => React.ReactElement
