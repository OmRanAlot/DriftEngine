-- One-time migration: add regime + derived columns to main OHLCV tables.
-- Run in Supabase SQL editor (or `psql`) before using `push_regime_columns_to_supabase`.

ALTER TABLE public.stock_daily
  ADD COLUMN IF NOT EXISTS regime_id integer,
  ADD COLUMN IF NOT EXISTS regime_label text,
  ADD COLUMN IF NOT EXISTS atr_z double precision,
  ADD COLUMN IF NOT EXISTS rsi_ma double precision,
  ADD COLUMN IF NOT EXISTS obv_roc double precision,
  ADD COLUMN IF NOT EXISTS obv_roc_mean double precision,
  ADD COLUMN IF NOT EXISTS net_regime_score double precision;

ALTER TABLE public.stock_hourly
  ADD COLUMN IF NOT EXISTS regime_id integer,
  ADD COLUMN IF NOT EXISTS regime_label text,
  ADD COLUMN IF NOT EXISTS atr_z double precision,
  ADD COLUMN IF NOT EXISTS rsi_ma double precision,
  ADD COLUMN IF NOT EXISTS obv_roc double precision,
  ADD COLUMN IF NOT EXISTS obv_roc_mean double precision,
  ADD COLUMN IF NOT EXISTS net_regime_score double precision;

ALTER TABLE public.stock_minutely
  ADD COLUMN IF NOT EXISTS regime_id integer,
  ADD COLUMN IF NOT EXISTS regime_label text,
  ADD COLUMN IF NOT EXISTS atr_z double precision,
  ADD COLUMN IF NOT EXISTS rsi_ma double precision,
  ADD COLUMN IF NOT EXISTS obv_roc double precision,
  ADD COLUMN IF NOT EXISTS obv_roc_mean double precision,
  ADD COLUMN IF NOT EXISTS net_regime_score double precision;

COMMENT ON COLUMN public.stock_daily.regime_id IS '0=Low-Vol Bull, 1=High-Vol Bull, 2=High-Vol Bear, 3=Sideways';
