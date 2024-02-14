export enum ComponentType {
  Image = 'image',
  Container = 'container',
  Text = 'text',
  TextField = 'textfield',
  TextArea = 'textarea',
  Button = 'button',
  Link = 'link',
  Select = 'select',
}

export interface View {
  type: string;
  id: string;
  style: {
    webStyle: Record<string, any>;
    actions: {
      onFocus: Record<string, string>;
      onHover: Record<string, string>;
    };
  };
  data?: {
    value?: string;
    label?: string;
    options?: string[];
    title?: string;
    helperText?: string;
    placeholder?: string;
  };
  requiredFields?: string[];
  children?: View[];
}

export interface Data {
  views: View[];
}
