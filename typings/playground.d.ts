interface ITemplate {
    id?: string;
    gist?: string;
    author?: string;
    source?: string;
    name?: string;
    description?: string;
}

interface ISnippet extends ITemplate {
    script?: {
        content: string;
        language: string;
    };
    template?: {
        content: string;
        language: string;
    };
    style?: {
        content: string;
        language: string;
    };
    libraries?: string;
}

interface IRunnerPostData {
    snippet: ISnippet | string; /* ISnippet when passed around, but string over the wire */
    returnUrl: string;
    refreshUrl: string;

    // Any further fields will simply get passed in to the refresh page:
    id: string;
    host: string;
    platform: string;
}

interface IMonacoEditorState {
    name?: string;
    view?: string;
    content?: string;
    language?: string;
    viewState?: monaco.editor.IEditorViewState;
    model?: monaco.editor.IModel;
}

interface IAlert {
    title: string;
    message: string;
    actions: string[];
}

interface ITab {
    name?: string,
    language?: string,
    content?: string
}

interface IEvent<T> {
    type: string,
    action: number,
    data: T
}

interface IGlobalConfig {
    env: 'DEVELOPMENT' | 'PRODUCTION';
    build: {
        name: string;
        version: string;
        build: number;
        author: string;
        full_version: string;
    },
    auth: {
        token_url: string,
        client_id: string
    }
}