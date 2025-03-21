"use client";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

type Props = {
  value: string;
  name: string;
  className: string;
  onChange: (val: string) => void;
  isDisabled?: boolean;
  id?: string;
};

function UpdateTextArea(props: Props) {
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
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    <Textarea
      value={localValue}
      className={props.className}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      disabled={props.isDisabled || false}
      id={props.id}
      rows={4}
    />
  );
}

export default React.memo(UpdateTextArea);
