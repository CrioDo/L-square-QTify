/**
 * Generates string classKey based on the properties provided. It starts with the
 * variant if defined, and then it appends all other properties in alphabetical order.
 * @param props - the properties for which the classKey should be created.
 */
export default function propsToClassKey(props: object): string;