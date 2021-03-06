import { ICaptureData } from './ICaptureData';
import { IStatus } from './IStatus';
import { ISubscription } from './ISubscription';
import { Guid } from 'guid-typescript';
import { IProperty } from './IProperty';

/**
 * Hardware interface all types of hardware must implement
 */
export interface IHardware {
	id: Guid;
	modelName: string;
	serial: string;
	type: string;
	timeout: number;

	/**
	 * Get all settings for device
	 */
	GetProperties(): Promise<Array<IProperty>>;

	/**
	 * Get a value for a specific setting
	 */
	GetProperty(key: string): Promise<IProperty>;

	/**
	 * Set a setting with desired value
	 */
	SetProperty(property: IProperty): Promise<IProperty>;

	/**
	 * Capture an exposure with current settings
	 */
	Capture(): Promise<Array<ICaptureData>>;

	/**
	 * Return camera status
	 */
	GetStatus(): IStatus;

	/**
	 * Return list of frame acquisition subscriptions
	 */
	GetSubscriptions(): Array<ISubscription>;

	/**
	 * Add a subscription to list
	 */
	AddSubscription(subscription: ISubscription): ISubscription;

	/**
	 * Delete a subscription
	 */
	DeleteSubscription(subscription: ISubscription): boolean;

	/**
	 * Return URI for streaming
	 */
	GetStreamUri(): string;

	/**
	 * Toggles the stream on/off
	 */
	ToggleStream(): boolean;
}