import { getTranslation } from '../../../utils/translations';

const getInputProps = (fieldName: string | null) => {
  let type;

  switch (fieldName) {
    case 'description':
    case 'label':
    case 'placeholder':
      type = 'text';
      break;
    case 'mainField':
      type = 'select';
      break;
    case 'editable':
      type = 'bool';
      break;
    default:
      type = '';
  }

  const labelId =
    fieldName === 'mainField'
      ? getTranslation('containers.SettingPage.editSettings.entry.title')
      : getTranslation(`form.Input.${fieldName}`);

  return { type, label: { id: labelId } };
};

export { getInputProps };
