import { List, 
    Datagrid, 
    TextField, 
    ReferenceField, 
    EditButton, 
    SimpleForm, 
    ReferenceInput,
TextInput,
Edit,
Create,
BooleanField,
Show,
SimpleShowLayout,
BooleanInput
 } from "react-admin";

 export const TodoList = () => (
     <List>
         <Datagrid>
             <ReferenceField source="userId" reference="users" />
             <TextField source="id" />
             <TextField source="title" />
             <BooleanField source="completed" />
         </Datagrid>
     </List>
 );

export const TodoShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="userId" reference="users" />
            <TextField source="id" />
            <TextField source="title" />
            <BooleanField source="completed" />
        </SimpleShowLayout>
    </Show>
);

export const TodoEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="id" />
            <TextInput source="title" />
            <BooleanInput source="completed" />
        </SimpleForm>
    </Edit>
);