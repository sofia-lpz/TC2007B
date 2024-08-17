import {useMediaQuery, Theme} from '@material-ui/core';
import {SimpleList, List, Datagrid, TextField, EmailField} from 'react-admin';

export const UserList = () => {

    const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down('sm'));

    return(
        {isSmall ? (
        <SimpleList
            primaryText={(record) => record.name}
            secondaryText={(record) => record.email}
            tertiaryText={(record) => record.id}
        />
    ) : (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
        </Datagrid>
    </List>
)
};
