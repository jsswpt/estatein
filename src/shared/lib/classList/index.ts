type PropsToClassResult<V extends string, P extends string> = Record<
  V,
  `${P}_${V}`
>;

export const propsToClass = <V extends string, P extends string>(
  values: Array<V>,
  prefix: P,
) =>
  values.reduce(
    (acc, curr) => ({ ...acc, [curr]: `${prefix}_${curr}` }),
    {} as PropsToClassResult<(typeof values)[number], typeof prefix>,
  );
