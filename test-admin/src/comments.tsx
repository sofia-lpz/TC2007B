import { Datagrid, 
    EmailField, 
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

export const CommentList = () => (
    <List>
        <Datagrid>
            <ReferenceField source="postId" reference="posts" />
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
        </Datagrid>
    </List>
);

export const CommentShow = () => (
    <Show>
        <SimpleShowLayout>
            <ReferenceField source="postId" reference="posts" />
            <TextField source="id" />
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="body" />
        </SimpleShowLayout>
    </Show>
);

export const CommentEdit = () => (
    <Edit>
        <SimpleForm>
            <ReferenceInput source="postId" reference="posts" />
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);