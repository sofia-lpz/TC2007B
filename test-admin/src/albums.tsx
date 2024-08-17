import { Datagrid,
     List, 
     ReferenceField, 
     TextField,
    Show,
SimpleShowLayout,
Edit,
ReferenceInput,
SimpleForm,
TextInput
 } from 'react-admin';

export const AlbumList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);

export const AlbumShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
        </SimpleShowLayout>
    </Show>
);

export const AlbumEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" />
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);