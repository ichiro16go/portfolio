/**
 * @file utils.ts
 * @description アプリケーション全体で使用される汎用ユーティリティ関数。
 * 主に Tailwind CSS のクラス名を動的かつ安全に結合するための `cn` 関数を提供します。
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
