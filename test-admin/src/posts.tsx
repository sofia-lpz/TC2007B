import { List, 
    Datagrid, 
    TextField, 
    ReferenceField, 
    EditButton, 
    SimpleForm, 
    ReferenceInput,
TextInput,
Edit,
Create
 } from "react-admin";

export const PostList = () => (
  <List>
   <Datagrid rowClick={false}>
     <TextField source="id" />
      <ReferenceField source="userId" reference="users" link="show"/>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
);

export const PostEdit = () => (
    <Edit>
      <SimpleForm>
        <TextInput source="id" InputProps={{ disabled: true }} />
        <ReferenceInput source="userId" reference="users" link="show" />
        <TextInput source="title" />
        <TextInput source="body" multiline rows={5} />
      </SimpleForm>
    </Edit>
  );


export const PostCreate = () => (
  <Create>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users" />
      <TextInput source="title" />
      <TextInput source="body" multiline rows={5} />
    </SimpleForm>
  </Create>
);