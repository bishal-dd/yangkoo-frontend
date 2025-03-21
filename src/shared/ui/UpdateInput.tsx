"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type Props = {
  value: string;
  name: string;
  placeholder: string;
  type: string;
  className: string;
  onChange: (val: string) => void;
  isDisabled?: boolean;
  id?: string;
};

function UpdateInput(props: Props) {
  const [localValue, setLocalValue] = useState<string>(props.value);

  // Create a debounced callback
  const debouncedOnChange = useDebouncedCallback((value) => {
    if (value !== props.value) {
      props.onChange(value);
    }
  }, 500);

  // Reset local value when prop value changes
  useEffect(() => {
    setLocalValue(props.value);
  }, [props.value]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setLocalValue(newValue);
      debouncedOnChange(newValue);
    },
    [debouncedOnChange]
  );

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.code === "Enter") e.preventDefault();
  }, []);

  return (
    <Input
      value={localValue}
      placeholder={props.placeholder}
      type={props.type}
      className={props.className}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      disabled={props.isDisabled || false}
      id={props.id}
    />
  );
}

export default React.memo(UpdateInput);
