import { isStatic } from '@/form-builder/libs/utils';
import type { FormElement } from '@/form-builder/form-types';
import { z, type ZodTypeAny } from 'zod';

export const generateZodSchema = (
  formElements: FormElement[],
): z.ZodObject<any> => {
  const schemaObject: Record<string, z.ZodTypeAny> = {};

  const addType = (element: FormElement): void => {
    if (isStatic(element.fieldType)) return;

    let elementSchema: z.ZodTypeAny;

    switch (element.fieldType) {
      case 'Input':
        if (element.type === 'email') {
          elementSchema = z.string().email();
          break;
        }
        if (element.type === 'number') {
          elementSchema = z.coerce.number();
          break;
        }
        elementSchema = z.string();
        break;
      case 'DatePicker':
        elementSchema = z.coerce.date();
        break;
      case 'Checkbox':
        elementSchema = z.boolean().default(true);
        break;
      case 'Slider':
        elementSchema = z.coerce.number();
        break;
      case 'Switch':
        elementSchema = z.boolean();
        break;
      case 'Select':
        elementSchema = z.string().min(1, 'Please an item');
        break;
      case 'ToggleGroup':
        elementSchema =
          element.type === 'single'
            ? z.string().min(1, 'Please an item')
            : z.array(z.string()).nonempty('Please select at least one item');
        break;
      case 'MultiSelect':
        elementSchema = z
          .array(z.string())
          .nonempty('Please select at least one item');
        break;
      case 'RadioGroup':
        elementSchema = z.string().min(1, 'Please select an item');
        break;
      default:
        elementSchema = z.string();
    }
    if (element.fieldType === 'Slider') {
      if (element.min !== undefined) {
        elementSchema = (elementSchema as any).min(
          element.min,
          `Must be at least ${element.min}`,
        );
      }
      if (element.max !== undefined) {
        elementSchema = (elementSchema as any).max(
          element.max,
          `Must be at most ${element.max}`,
        );
      }
    }

    if (!('required' in element) || element.required !== true) {
      elementSchema = elementSchema.optional();
    }
    // Ensure fieldSchema is of type ZodTypeAny
    schemaObject[element.name] = elementSchema as ZodTypeAny;
  };
  formElements.flat().forEach(addType);

  return z.object(schemaObject);
};

export const zodSchemaToString = (schema: z.ZodTypeAny): string => {
  if (schema instanceof z.ZodDefault) {
    return `${zodSchemaToString(schema._def.innerType)}.default(${JSON.stringify(schema._def.defaultValue())})`;
  }

  if (schema instanceof z.ZodBoolean) {
    return 'z.boolean()';
  }

  if (schema instanceof z.ZodNumber) {
    let result = 'z.number()';
    if ('checks' in schema._def) {
      for (const check of schema._def.checks) {
        if (check.kind === 'min') {
          result += `.min(${check.value})`;
        } else if (check.kind === 'max') {
          result += `.max(${check.value})`;
        }
      }
    }
    return result;
  }

  if (schema instanceof z.ZodString) {
    let result = 'z.string()';
    if ('checks' in schema._def) {
      for (const check of schema._def.checks) {
        if (check.kind === 'min') {
          result += `.min(${check.value})`;
        } else if (check.kind === 'max') {
          result += `.max(${check.value})`;
        }
      }
    }
    return result;
  }

  if (schema instanceof z.ZodDate) {
    return 'z.coerce.date()';
  }

  if (schema instanceof z.ZodArray) {
    return `z.array(${zodSchemaToString(schema.element)}).nonempty("Please at least one item")`;
  }

  if (schema instanceof z.ZodTuple) {
    return `z.tuple([${schema.items.map((item: z.ZodTypeAny) => zodSchemaToString(item)).join(', ')}])`;
  }

  if (schema instanceof z.ZodObject) {
    const shape = schema.shape;
    const shapeStrs = Object.entries(shape).map(
      ([key, value]) => `${key}: ${zodSchemaToString(value as ZodTypeAny)}`,
    );
    return `z.object({
  ${shapeStrs.join(',\n  ')}
})`;
  }

  if (schema instanceof z.ZodOptional) {
    return `${zodSchemaToString(schema.unwrap())}.optional()`;
  }

  return 'z.unknown()';
};

export const getZodSchemaString = (formElements: FormElement[]): string => {
  const schema = generateZodSchema(formElements);
  const schemaEntries = Object.entries(schema.shape)
    .map(([key, value]) => {
      return `"${key}": ${zodSchemaToString(value as ZodTypeAny)}`;
    })
    .join(',\n');

  return `
  import * as z from "zod"

  export interface ActionResponse<T = any> {
      success: boolean
      message: string
      errors?: {
          [K in keyof T]?: string[]
      }
      inputs?: T
  }
  export const formSchema = z.object({\n${schemaEntries}\n});`;
};
