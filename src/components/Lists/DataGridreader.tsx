/* eslint-disable react/jsx-props-no-spreading */
import { styled } from "@mui/material";
import {
  DataGridPro,
  DataGridProProps,
  gridClasses,
} from "@mui/x-data-grid-pro";
import { columnHeaders } from "../../settings/global";

const StyledDataGrid = styled(DataGridPro)(
  ({ theme, onRowClick, checkboxSelection, rows, columnHeaderHeight }) => ({
    borderRadius: 0,
    borderLeft: "none",
    borderRight: "none",
    [`& .${gridClasses.columnHeaderTitle}`]: {
      fontWeight: 500,
      fontSize: theme.typography.body2.fontSize,
    },
    [`& .${gridClasses.menuIcon}`]: {
      marginRight: theme.spacing(0.25),
    },
    [`& .${gridClasses.columnHeaders}`]: {
      borderBottom: !columnHeaderHeight && "none",
    },
    [`& .${gridClasses.cell}, .${gridClasses.columnHeader}`]: {
      fontSize: theme.typography.body1.fontSize,
      outline: "none !important",
    },
    [`& .${gridClasses.root}, .${gridClasses.cell}`]: {
      "&:first-of-type ": {
        paddingLeft: !checkboxSelection && theme.spacing(3),
      },
    },
    [`& .${gridClasses.root}, .${gridClasses.columnHeader}`]: {
      "&:first-of-type ": {
        paddingLeft: !checkboxSelection && theme.spacing(3),
      },
    },
    [`& .${gridClasses.row}`]: {
      cursor: onRowClick ? "pointer" : undefined,
    },
    [`& .${gridClasses.main} > div:first-of-type`]: {
      zIndex: 1,
    },
    [`& .${gridClasses.columnHeader}:last-of-type > .${gridClasses.columnSeparator}`]:
      {
        display: "none",
      },
    [`& .${gridClasses.virtualScroller}`]: {
      overflow: rows.length > 0 ? "auto" : "hidden",
    },
    [`& .${gridClasses.cellContent}`]: {
      fontSize: theme.typography.body2.fontSize,
    },
  })
);

const DataGridReader = (props: DataGridProProps) => (
  <StyledDataGrid
    {...Object.assign(
      {
        disableSelectionOnClick: true,
        disableColumnResize: true,
        disableColumnReorder: true,
        headerHeight: columnHeaders,
        rowHeight: 42,
        hideFooter: true,
      } as unknown as DataGridProProps,
      props
    )}
  />
);

export default DataGridReader;
